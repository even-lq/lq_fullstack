const Koa = require('koa')
const path = require('path') // 路径模块
const views = require('koa-views');
const config = require('./config/default');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session')
const staticCache = require('koa-static-cache')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

// 表单解析
app.use(bodyParser({
  formLimit: '1mb' // 表单参数的大小
}))

// session 存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}


// 配置session中间件
// session用 key -> store 联系
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}))

// 缓存
app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))



// 配置服务端的模板引擎中间件
// 读取模板文件 views
// __dirname 总是指向被执行 js 文件的绝对路径
// path.join 路径拼接，以下为绝对路径拼接 views文件夹
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// const router = require('./routers/signin')
// app.use(router.routes())
app.use(require('./routers/signin').routes())
app.use(require('./routers/signup').routes())


app.listen(config.port, () => {
  console.log('3000端口已启动');
})