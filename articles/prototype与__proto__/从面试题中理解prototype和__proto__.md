## 从面试题中理解prototype和\__proto__

之前花了很多时间去学习原型链，自认为当时是理解了，近来发现理解得还不够深刻，借两道面试题来复习一下prototype和\__proto__

### 面试题一

```js
var a = {}
var b = Object.prototype

console.log([a.prototype === b, Object.getPrototypeOf(a) == b]);
```

正确答案：[false, true]

### 面试题二

```js
function f() {}
var a = f.prototype 
var b = Object.getPrototypeOf(f); 

console.log(a === b); 
```

正确答案：false

#### \__proto__

先了解`Object.getPrototypeOf()`，引入一段MDN的解释：

> ​	`Object.getPrototypeOf()` 方法返回指定对象的原型（内部`[[Prototype]]`属性的值）。

`[[Prototype]]` 其实就是`__proto__`

所以`Object.getPrototypeOf()`返回的是一个对象（函数也是对象）的原型，也就是说**\__proto__指向的是对象的原型**

注：原型是一个对象，其他文章书籍多解释为**原型对象**，下文便于阐述，均把原型对象称为原型

#### prototype

1. prototype是（构造）函数独有的属性，`函数.prototype`代表的就是对象的原型

2. 当构造函数创建实例对象，也就是进行`new`操作（new操作四部曲）时，会把实例对象的`__proto__`指向构造函数的`prototype`

   ```js
   function F() {}
   let f = new F()
   f.__proto__ === F.prototype
   ```

3. 所以我们在实例对象的原型（也就是`函数.prototype`）上定义属性或方法时，实例对象在自身找不到对应的属性或方法的时候会向其原型上查找

### 图解

结合上面的分析我们可以得到下面的图示

以函数F和其实例对象f为例

![prototype与__proto__](E:\study\StudyProjects\lq_fullstack\articles\prototype与__proto__\prototype与__proto__.png)

总结来说由构造函数创建的实例对象，其原型指向构造函数的prototype属性所代表的原型

那么既然实例对象的原型由其构造函数的prototype提供，那么构造函数的原型由谁提供呢？

答案是：**Function.prototype**

### Function.prototype

由`Object.getPrototypeOf()`可得构造函数的原型

![构造函数的__proto__](E:\study\StudyProjects\lq_fullstack\articles\prototype与__proto__\构造函数的__proto__.png)

那么也就是说

`函数.__proto__ === Function.prototype`

补全图解

![完整图解](E:\study\StudyProjects\lq_fullstack\articles\prototype与__proto__\完整图解.png)

结合`new`操作符来理解，我认为构造函数其实是**工具**，而原型不准确的来说是**类**，构造函数只是实例对象与原型联通在一起的桥梁。

在面向对象语言的类和实例的关系中，实例的所有属性和方法均来自类，实例无法动态添加属性或方法

而在JavaScript的构造函数、原型与实例的关系中，构造函数和原型可以指定实例对象的初始属性和方法，并且可以动态添加属性或方法

JavaScript中用对象来模拟**类**还挺有意思的

### 分析面试题

经过上面的分析再来看面试题，其实已经一目了然了

面试题一：对象没有prototype属性，a等于undefined，对象a的原型是Object.prototype也就是b，所以[false, true]

面试题二：a等于构造函数new出来的实例对象的原型，b等于构造函数的原型，所以false