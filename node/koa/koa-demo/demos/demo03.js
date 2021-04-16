const Koa = require('koa')
const app = new Koa()
const main = (ctx) => {
  // 判断请求头
  if(ctx.request.accepts('xml')) {
    // 设置响应类型
    ctx.response.type = 'xml'
    ctx.response.body = '<data>Hellow xml</data>'
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html'
    ctx.response.body = '<p>Hellow html</p>'
  } else if (ctx.request.accepts('json')) {
    ctx.response.type = 'json'
    ctx.response.body = '{data: Hello json}'
  } else {
    ctx.response.type = 'text'
    ctx.response.body = 'Hello text'
  }
}
app.use(main)
app.listen(3000, () => {

})