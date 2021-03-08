### async-await

1. 无法捕捉错误（对比promise，要用try-catch
2. async函数在声明形式上跟普通函数没有区别，函数声明，函数表达式，对象方法，class方法，箭头函数都可以声明async函数

3. 任何await语句后面的promise对象变成reject状态，那么整个async函数都会中断
4. async函数返回promise对象，必须等到内部所有的await命令后面的promise对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误  
5. await后的函数会执行并返回带有resolve的promise（不然只返回空promise还是不能把promise捋成同步）