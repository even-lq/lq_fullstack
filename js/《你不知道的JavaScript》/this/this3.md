### this

#### 执行栈

```js
//运行代码
sayHello();
function sayHello(){
    var message = getMessage();
    console.log(message);
}
function getMessage(){
    return 'hello';
}
```

```js
//执行栈
var exeStack = [];
//先压如全局执行环境
exeStack.push('globalContext');
//遇到执行sayHello函数，ok，压进去
exeStack.push('sayHello');
//执行sayHello函数发现，还有个getMessage函数，ok，压进栈
exeStack.push('getMessage');
//执行完了getMessage函数，弹栈
exeStack.pop();
//继续执行sayHello函数，又发现有console.log这个家伙，ok，你进栈
exeStack.push('console.log');
//执行了console后，输出hello，console 弹栈
exeStack.pop();
//这时sayHello执行完，弹栈
exeStack.pop();
//最后整个代码执行完，全局环境弹栈
exeStack.pop();
```

![img](https://images2017.cnblogs.com/blog/1144006/201711/1144006-20171121120123649-80762518.png)

>  这里主要是js在执行时的一个总体过程，但是你们可能会疑惑，压进栈里面的一块块（抽象）东西到底包含的是什么？
> 我可以告诉你们是，执行上下文，global是指全局的的执行上下文，其他的是函数执行上下文，那到底这些上下文包含什么，我会在下一篇详解。

#### 执行上下文

js预编译时会创建执行上下文

> 执行上下文：也叫一个执行环境，有全局执行环境和函数执行环境两种。每个执行环境中包含这三部分：**变量对象/活动对象**，**作用域链**，**this的值**

##### 1. 组成

```js
//可以把执行上下文看作一个对象
exeContext = {
    VO = [...],  //VO代表变量对象，保存变量和函数声明
    scopeChain = [...];  //作用域链
    thisValue = {...};  //this的值
}
```

- 变量对象（variable object）：在全局执行上下文中
- 活动对象（activation object）：在函数执行上下文中

#### this

上面说过执行上下文有两种，一个全局执行上下文，一个函数执行上下，下面分别说说这两种上下文的this。

##### a.全局执行上下文的this

> 指向window全局对象

##### b.函数执行上下文的this(主要讲函数的this)

> **在《JavaScript权威指南》中有这么几句话：**
> 1.this是关键字，不是变量，不是属性名，js语法不允许给this赋值。
> 2.关键字this没有作用域限制，嵌套的函数不会从调用它的函数中继承this。
> 3.如果嵌套函数作为**方法调用**，其this指向调用它的对象。
> 4.如果嵌套函数作为**函数调用**，其this值是window（非严格模式），或undefined（严格模式下）。

**解读一下：** 上面说的概括了this两种值的情况：
1.函数直接作为**某对象的方法**被调用则函数的this指向该对象。
2.函数作为**函数直接独立调用**（不是某对象的方法），或是函数中的函数，其this指向window。上面说过执行上下文有两种，一个全局执行上下文，一个函数执行上下，下面分别说说这两种上下文的this。



`var foo =obj.foo`，变量foo指向函数本身，相当于变量foo拿到obj.foo的地址在全局上下文中执行，所以foo()是Winows

