## Promise

### 是什么

（耗时的/异步的 => 保姆例子）

根据Promise/A+规范，它表示一个异步操作的最终结果；promise是JavaScript中进行异步编程的新的解决方案，没有promise之前我们通过多个串联的回调函数进行异步操作，这样的坏处是增加了代码的可读性，且嵌套的层级过多，容易出错；

而promise的出现，

- 有效解决了回调地狱的问题，规范了一种异步操作的写法（链式），使得代码变得扁平化易于理解。
- 并且它有完善的API实现许多强大的功能，比如Promise.all（等所有promise执行完了，统一返回所有promise的resolve）,Promise.race（返回最快出现结果的promise的resolve或reject），Promise.any（只要其中的一个 `promise` 成功，就返回那个已经成功的 `promise`）

#### 优点

### 没有Promise之前我们怎么进行异步编程

#### 回调函数

代码臃肿，可读性差，耦合程度过高，代码复用性差

#### 订阅发布者模式（用手机的消息提醒进行比喻）

定义对象间的一种一对多的关系，当一个对象的状态发送改变时，所有依赖它的对象都得到通知并自动更新。

- 以组件开发的角度看，它在有多层组件嵌套的时候更便于通信，降低通信成本。（我们也有更好的统一状态管理工具Vuex，Redux等）
- 符合模块化的思想，各模块分工明确。
- 凡事有个度，如果这样的代码多起来追踪起来比较麻烦，需要花费很多时间

#### generator

- 是什么？

  封装了多个**内部状态**和**控制函数内部状态执行权**的状态机；

- 怎么用

  执行generator函数会返回一个遍历器对象，对于返回的遍历器对象，可以依次用`next()`方法遍历generator函数内部的每一个状态。

- yield表达式

  generator函数内部状态的暂停标志。

  遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的`value`属性值。

  `yield`表达式后面的表达式，只有当调用`next`方法、内部指针指向该语句时才会执行。

- next

  （1）遇到`yield`表达式，就暂停执行后面的操作，并将紧跟在`yield`后面的那个表达式的值，作为返回的对象的`value`属性值。

  （2）下一次调用`next`方法时，再继续往下执行，直到遇到下一个`yield`表达式。

  （3）如果没有再遇到新的`yield`表达式，就一直运行到函数结束，直到`return`语句为止，并将`return`语句后面的表达式的值，作为返回的对象的`value`属性值。

  （4）如果该函数没有`return`语句，则返回的对象的`value`属性值为`undefined`。

  参数：

  next方法可以带一个参数，该参数会被当做**上一个yield表达式的返回值**。

  next传参的方式可以向generator函数注入值，使得在generator函数运行的不同阶段，调整函数的行为。

- generator函数的异步应用（协程）

  - 协程

    多个线程相互协作，完成异步任务；通过控制协程的执行权来分段执行异步任务。

    协程遇到yield命令就暂停，将执行权交给其他协程，待执行权返回，再从暂停的地方继续往后执行。它的最大优点，就是代码的写法非常像同步操作，如果去除`yield`命令，简直一模一样。

  - generator函数的数据交换和错误处理

    函数体内外的数据交换和错误处理机制。

    利用generator返回的遍历器对象抛出的错误可以给try...catch捕获

    ```javascript
    function* gen(x){
      try {
        var y = yield x + 2;
      } catch (e){
        console.log(e);
      }
      return y;
    }
    
    var g = gen(1);
    g.next();
    g.throw('出错了');
    // 出错了
    ```

    [异步任务的封装](https://es6.ruanyifeng.com/#docs/generator-async#%E5%BC%82%E6%AD%A5%E4%BB%BB%E5%8A%A1%E7%9A%84%E5%B0%81%E8%A3%85)

引导：解决异步回调地狱的解决方案 => 基本原理 => 事件循环 => 渲染代码放在微任务

> 作者：ITEM
> 链接：https://juejin.cn/post/6945319439772434469
> 来源：掘金
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

### Promises/A+

- 这是一个开放的标准，实现了可靠的、可互操作的JavaScript promise标准，
- 该规范详细描述了then方法的行为，提供了一个可互操作的基础，所有Promises/A+一致性promise实现都可以依赖于提供这个基础。因此，该规范应该被认为是非常稳定的。
- 比如`thenable` 是一个定义 `then(..)` 方法的对象或函数，还有一个符合该标准的promise必须具备三种状态pending，fulfilled或者rejected，规定了then的参数。

### 基本原理（特点）

Promise 是一个类，在执行这个类的时候会传入一个执行器，这个执行器会立即执行

#### Promise 会有三种状态

- Pending 等待
- Fulfilled 完成
- Rejected 失败

1. 状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，
2. 且一但发生改变便不可二次修改；
3. 如果promise的状态是pending则会阻碍后面代码的执行（可以问面试官为什么会这样）

Promise 中使用 resolve 和 reject 两个函数来更改状态；

#### then 方法

- 状态判断
  - 如果状态是成功，调用成功回调函数
  - 如果状态是失败，调用失败回调函数

- 返回一个新的promise

  - then回调如果返回一个promise则会被当做参数传递给x，在经过一系列处理后返回一个新的promise

  - 返回普通值

    即使返回普通值也会将其包装成一个新的promise并把该值resolve出去

  - then回调函数中没有return语句

    则返回一个用undefined包装的Promise对象

- 值穿透

  如果起始的then方法没有传入任何回调，则继续向其后的then传递，知道有then回调为止

### then

1. 同步的then回调

   push所有回调函数，并依次调用

2. 异步的then回调（链式）

   return 返回值 作为下一个then方法的参数

   - return Promise对象

     需要判断其状态

   - return 别的返回值

3. 循环调用自己造成死循环

   ```js
   const promise = new Promise((resolve, reject) => {
     resolve(100)
   })
   const p1 = promise.then(value => {
     console.log(value)
     return p1
   })
   ```

### async

过多的链式调用可读性仍然不佳，流程控制也不方便

ES7新的异步解决方案；是Generator函数的语法糖（promise+generator合适一点）。

async关键字，表示函数内部有异步操作；await会阻塞后面代码的执行；

前文有一个 Generator 函数，依次读取两个文件。

```javascript
const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

上面代码的函数`gen`可以写成`async`函数，就是下面这样。

```javascript
const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
```

gennerator的* => async; yield => await

#### 优点

1. 与generator函数相比，async函数自带执行器，async函数与普通函数一样执行。
2. 比起yield，async和await语义更清晰
3. 适用性更高
4. 返回promise，其await是then的语法糖

#### 缺点

滥用 `await` 可能会导致性能问题，因为 `await` 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性

#### 使用

1. await

   - async函数返回的是promise对象，可以作为await命令的参数。

     ```js
     async function timeout(ms) {
       await new Promise((resolve) => {
         setTimeout(resolve, ms);
       });
     }
     
     async function asyncPrint(value, ms) {
       await timeout(ms);
       console.log(value);
     }
     
     asyncPrint('hello world', 50);
     ```

   - await的参数如果不是promise，则其后的值将会作为async返回的promise的resolve值/then回调的参数

     ```js
     async function f() {
       // 等同于
       // return 123;
       return await 123;
     }
     
     f().then(v => console.log(v))
     // 123
     ```

   - await命令后面是一个`thenable`对象（定义了then方法的对象），await会将其等同于Promise对象。

     await会执行then的回调，并返回resolve的结果

   - `await`命令后面的`Promise`对象，运行结果可能是`rejected`，所以最好把`await`命令放在`try...catch`代码块中。

   - await减少耗时

     多个`await`命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。（Promise.all）

     ```js
     // 写法一
     let [foo, bar] = await Promise.all([getFoo(), getBar()]);
     
     // 写法二
     let fooPromise = getFoo();
     let barPromise = getBar();
     let foo = await fooPromise;
     let bar = await barPromise;
     ```

   - await只能用在async函数中，不能用在普通函数中

2. async

   - async 声明的位置function前，箭头函数前，方法前

   - `async`函数不管有没有`return`语句，总是返回一个 Promise 对象。而该Promise的状态（resolve/reject），会成为`then`方法回调函数的参数。

     如果抛出错误则会导致Promise对象变为reject状态

     ```js
     async function f() {
       return 'hello world';
     }
     
     f().then(v => console.log(v))
     // "hello world"
     ```

   - async内部的所有异步操作执行完，其后的then回调才会执行；
   - async 函数可以保留运行堆栈

3. 错误处理

   用try...catch，如果try中有错误则不会使promise变成reject状态，而是会被catch接收，在try..catch外返回的await不受影响

   ```javascript
   async function f() {
     try {
       await new Promise(function (resolve, reject) {
         throw new Error('出错了');
       });
     } catch(e) {
     }
     return await('hello world');
   }
   ```

   如果有多个`await`命令，可以统一放在`try...catch`结构中。

   ```javascript
   async function main() {
     try {
       const val1 = await firstStep();
       const val2 = await secondStep(val1);
       const val3 = await thirdStep(val1, val2);
   
       console.log('Final: ', val3);
     }
     catch (err) {
       console.error(err);
     }
   }
   ```