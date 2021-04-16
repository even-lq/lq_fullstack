// 用koa创建web服务（为web端提供服务：后端服务）
const Koa = require('koa')

const app = new Koa()

// 监听端口
app.listen(3000, () => {
  console.log('success');
})