// 用koa创建web服务（为web端提供服务：后端服务）
const Koa = require('koa')
const app = new Koa()
// ctx 就是app，koa实例
// 服务端向客户端响应hello world
// 诞生了一个接口（api）
const main = (ctx) => {
  ctx.response.body = 'Hello world'
}
app.use(main)
// 监听端口
app.listen(3000, () => {
  console.log('success');
})
