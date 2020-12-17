### new操作符

1. 返回的一定是一个对象

2. 返回的对象具有隐式原型`__proto__`，该隐式原型一定会指向某个原型对象，

   否则new的定义无法成立

   所以本例中"index.js"

   ` obj.__proto__ = Constructor.prototype`

3. 完成构造函数的初始化（赋值）

   构造函数.call(要返回的对象)

4. 判断构造函数初始化的时候有没有返回东西

   如果返回了值类型或者没有返回值 => 返回obj

   否则返回其返回的对象

5. 检测对象是否是new创建

   如果对象是new创建的话，那么在new的过程中，构造函数的this会指向该实例对象，**根据上面的第二点**，所以可以用instanceof判断

   ```js
   function Person(n,a){   
       this.name = n;
       this.age = a;
       if(this instanceof Person){
           alert('new调用');
       }else{
           alert('函数调用');
       }
   }
   var p = new Person('jack',30); // --> new调用
   Person(); // --> 函数调用
   ```

### call，apply，bind

#### 1. 本质

让对象或者函数的call,apply,bind方法可以访问**参数对象**的属性或方法

也就是**改变方法调用者的this指向**

```js
let obj = {
  fn: function name(params) {
    this.name = params
  }
}
obj.fn('liqing')
console.log(obj);
```

如果fn可以定义在任何一处并且调用fn的某个方法可以达到call,apply,bind的效果，则我们可以自定义call,apply,bind方法

#### 2. bind要点&难点

> https://github.com/mqyqingfeng/Blog/issues/12

>bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )

#####  1. 返回一个函数

```js
// 第一版
Function.prototype.bind2 = function (context) {
    var self = this;
    return function () {
        return self.apply(context);
    }
}
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind2(foo); 

bindFoo(); // 1
```

##### 2. 可以传入参数（可以在bind2中传入，也可以在bind2返回的结果函数中传入）

```js
// 第二版
Function.prototype.bind2 = function (context) {

    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }

}

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18
```

##### 3. 可实例化的构造函数（实例化+原型继承）

> 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

（在本例中，效果为bar当成构造器，new出了obj）

也就是说当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效。

```js
var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin
```

此时绑定的this指向了obj，本质是`bar.apply(obj)`

```js
// 第三版
Function.prototype.bind2 = function (context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}
```

![bind第三版](https://s3.ax1x.com/2020/12/16/r1UfaR.png)

第一层fbound一定需要返回一个对象，那就让返回的第二层是bar实例化的obj即可

由图中的操作可以得出bar实例化了obj，而不是fBound

##### 4. 防止原型污染

在第三版代码中中，我们直接将 fBound.prototype = this.prototype，我们直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype（bar.prototype）。这个时候，我们可以通过一个空函数来进行中转：

```js
// 第四版
Function.prototype.bind2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('type error')
      }
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

![bind最终版.png](https://s3.ax1x.com/2020/12/16/r10z7Q.md.png)

new操作符一样，但是优化了fBound操作prototype的情况，当fBound需要操作prototype时，中间隔着fNop实例，而`bindFoo.prototype.__proto__`才是`bar.prototype`，避免了原型污染

