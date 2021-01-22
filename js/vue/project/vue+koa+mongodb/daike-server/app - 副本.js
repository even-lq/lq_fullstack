const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// ctx代表Koa本身
// app.use((ctx) => {
//   ctx.body = 'hello'
// })

// 让router的回调函数具备Koa
app.use(router.routes())

router.get('/login', (ctx) => {
  ctx.body = 'login page'
})
app.listen(3000)