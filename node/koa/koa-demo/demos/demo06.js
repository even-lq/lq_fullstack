const Koa = require('koa')
const router = require('koa-route') // 拿路由来定义接口
const app = new Koa()

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">about</a>'
}
const main = ctx => {
  ctx.response.body = 'hello world'
}
app.use(router.get('/about', about))
app.use(router.get('/', main))
app.listen(3000, () => {
  console.log('3000端口已启动');
})
