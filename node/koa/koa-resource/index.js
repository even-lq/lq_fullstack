const Koa = require('./lib/application')
// const Koa = require('koa')
const app = new Koa();

// 中间件
// app.use((ctx, next) => {
//   ctx.body = 'Hello World'
// })
app.use((ctx) => { // ctx
  console.log(ctx.req.url);
  console.log(ctx.request.req.url);
  console.log(ctx.response.req.url);
  console.log(ctx.request.url); // ctx.req.url
  console.log(ctx.request.path);
  console.log(ctx.url);
  console.log(ctx.path);
})


// 不写listen的话use不会执行
app.listen(3000, () => {
  console.log('run server');
})

// let http = require('http')
// let server = http.createServer((req, res) => {
//   res.end('hellp jak')
// })
// server.listen(4000)

