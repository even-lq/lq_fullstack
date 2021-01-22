const Koa = require('koa')
const app = new Koa()

// 解决跨域
const cors = require('koa2-cors')
app.use(cors())

// 解决koa无法解析前端传来的参数的问题
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 让router的回调函数具备Koa
const user_router = require('./routes/api/user_router')
app.use(user_router.routes())

// 连接数据库
const mongoose = require('mongoose')
const config = require('./config')
// 当前的URL字符串解析器被弃用然后也提供了解决方案 让你在选项里面{ useNewUrlParser: true }
mongoose.connect(config.db, { useNewUrlParser: true }, err => {
  if (err) {
    console.error('failed');
  } else {
    console.log('connecting database successfully');
  }
})


app.listen(3000)