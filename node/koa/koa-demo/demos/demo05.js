const Koa = require('koa')
const fs = require('fs') // 文件系统
const app = new Koa()

const main = ctx => {
  if (ctx.request.url !== '/') {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">Index page</a>'
  } else {
    ctx.response.body = 'hello world'
  }
  
}
app.use(main)
app.listen(3000, () => {
  console.log('3000端口已启动');
})
