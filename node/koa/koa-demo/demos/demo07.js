// 用koa起一个web服务
const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

// use的回调函数称为：中间件
const main = (ctx, next) => {
  // 直接向前端输出 'hello'
  ctx.body = 'hello'
}
app.use(route.get('/abc', main))

app.listen(3000)