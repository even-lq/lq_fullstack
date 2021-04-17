## koa源码

### use

1. 把传入的fn存为this.fn

2. use里的回调函数实际上在listen中调用

   - 调用时需要处理req和res
   - 实际上调用的函数的参数是封装过的req和res => ctx
   - `res.end(ctx.body)`

3. createContext代理

   - req/res直接赋值给request.req/response.req/ctx.req 

     ```js
     ctx.req = request.req = response.req = req;
     ctx.res = request.res = response.res = res;
     ```

     此处直接赋值所以下面（use的代码）的可以访问

     ```javascript
     console.log(ctx.req.url);
     console.log(ctx.request.req.url);
     console.log(ctx.response.req.url);
     ```

   - get 代理

     利用this的指向及get可以用访问属性的方式替代函数调用的方式的特点

     将ctx.request代理为ctx.req（response同理）

   - \__defineGetter__代理

     > `__defineGetter__` 方法可以将一个函数绑定在当前对象的指定属性上，当那个属性的值被读取时，你所绑定的函数就会被调用

     将ctx.url代理成request.url

     原理：ctx返回的proto调用`__defineGetter__`的方法时会在ctx访问url的时候将url代理成request.url

koa是node的语法糖

listen：嵌套了node的listen

use：保存回调函数

ctx：是req和res的交叉赋值，在集合node原生的req和res的基础上为contex添加了request/response/req/res属性，把ctx.request/ctx.response作为request/response新属性，并在其基础上添加了req/res/response/request/ctx属性，使其更便利的访问

next



