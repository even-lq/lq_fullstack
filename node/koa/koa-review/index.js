const Koa = require('koa')
const app = new Koa();

// 中间件
app.use((ctx, next) => {
  ctx.body = 'Hello World'
})

app.listen(3000)

let http = require('http')
let server = http.createServer((req, res) => {
  res.end('hellp jak')
})
server.listen(4000)

