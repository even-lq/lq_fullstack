### 事件循环机制

https://zhuanlan.zhihu.com/p/87684858

#### 1. 进程与线程的区别

进程：CPU在运行指令及加载和保存上下文所需要的时间（时间片）

线程：是进程中更小的单位，描述了执行一段指令所需要的时间

#### 2. JS单线程的好处

- 获取dom时渲染更安全
- 消耗更少的运行内存，节约资源

#### 3. 执行栈

存储函数调用的栈结构

#### 4. event-loop

我们都知道 Js 是单线程都，但是一些高耗时操作就带来了进程阻塞问题。为了解决这个问题，Js 有两种任务的执行模式：**同步模式（Synchronous）和异步模式（Asynchronous）**。

在异步模式下，创建**异步任务主要分为宏任务与微任务两种**。ES6 规范中，宏任务（Macrotask） 称为 Task， 微任务（Microtask） 称为 Jobs。宏任务是由宿主（浏览器、Node）发起的，而微任务由 JS 自身发起。

> 作者：ITEM
> 链接：https://juejin.cn/post/6945319439772434469
> 来源：掘金
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

- 异步中的微任务和宏任务

  微任务：process.nextTick，promise的then，MutationObserver

  宏任务：script(同步代码)，setTimeout，setInterval，setImmediate，I/O，UI-rendering

- js执行引擎的执行代码的顺序：
  1. 首先**执行同步代码**（宏任务）
  2. 当执行完所有的同步代码，执行栈为空，查看**是否有异步代码**需要执行，有则执行
  3. **执行所有微任务**
  4. 当所有微任务执行完后，有必要的话就**渲染页面**
  5. 然后开始下一轮的**Event-Loop**，**执行宏任务**

![event-loop](E:\study\StudyProjects\lq_fullstack\js\event-loop\event-loop.png)

应用

把操作dom的宏任务代码放到微任务中可以更快渲染

### nodejs 的eventLoop分为下面的几个阶段:

1. timer 阶段
2. I/O异常回调阶段
3. 空闲、预备状态(第2阶段结束，poll未触发之前)
4. poll 阶段
5. check 阶段
6. 关闭事件的回调阶段





