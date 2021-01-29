## （传统MVC）koa+mysql

前后端不分离

### 项目配置

1. mysql

   - 连接mysql

     mysql -u root -p 输入密码

   - 建库

     create database nodesql;

     use nodesql;

   - 建表

     show tables;

2. 初始化项目

   npm init -y

   npm i mysql mysql依赖

   npm i md5 加密工具

   npm i koa 

   ​			koa-bodyparser 表单解析

   ​			koa-mysql-session  koa的session
   
   ​			koa-session-minimal koa的session
   
   ​			koa-router 路由
   
   ​			koa-views 读取模板文件（ejs文件）
   
   ​			koa-static-cache 静态资源缓存
   
   npm i ejs 视图

3. 启动项目

   nodemon .\index.js

### 项目结构

config 配置文件

lib 数据库连接

public 静态资源

router 路由层

views 视图层

controller 控制层

middlewares 中间件（判断是否登录）

index.js 页面入口



### 项目

- exports：默认抛出一个对象

- 表单解析

  ```js
  const bodyParser = require('koa-bodyparser')
  
  app.use(bodyParser({
   formLimit: '1mb' // 表单参数的大小
  }))
  ```

- 缓存静态资源

  ```js
  // 缓存
  const staticCache = require('koa-static-cache')
  
  app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
  }))
  app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
  }))
  ```

- session 存储配置

  ```js
  const config = require('./config/default');
  
  const sessionMysqlConfig = {
   user: config.database.USERNAME,
   password: config.database.PASSWORD,
   database: config.database.DATABASE,
   host: config.database.HOST,
  }
  ```

- 配置session中间件

  ```js
  // session用 key -> store 联系
  
  const session = require('koa-session-minimal');
  const MysqlStore = require('koa-mysql-session')
  
  app.use(session({
   key: 'USER_SID',
   store: new MysqlStore(sessionMysqlConfig)
  }))
  ```

- 配置服务端的模板引擎中间件

  ```js
  const views = require('koa-views');
  
  // 读取模板文件 views
  // __dirname 总是指向被执行 js 文件的绝对路径
  // path.join 路径拼接，以下为绝对路径拼接 views文件夹
  app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
  ```

  ```js
  const router = require('koa-router')();
  const userModel = require('../lib/mysql');
  // const controller = require('../controller/c-signin');
  
  router.get('/signup', async (ctx, next) => {
    // 第一个参数 加载到 views/signup.ejs 文件 
    // 第二个参数 所需要传递的参数
    await ctx.render('signup', {
      session: ctx.session
    })
  })
  
  module.exports = router
  ```

### CSS

1. input框响应式布局+focus样式

   ```css
   input {
       display: block;
       width: 100%; /*input的外包裹设置百分比宽度即可*/
       height: 35px;
       font-size: 18px;
       padding: 6px 7px;	
   	border-radius: 4px;   
   	border: 1px solid #d7dde4;
   	-webkit-appearance: none;
   }
   
   input:focus,textarea:focus{
       outline: 0;
       box-shadow: 0 0 0 2px rgba(51,153,255,.2);
       border-color: #5cadff;
   }
   ```

   

看ejs文件的html和css  c-signup.js