### 全栈

- 前端

  - 用户端 vue

    vue init webpack vue-online-shop-frontend

    npm i -g express-generator   express脚手架

    express vue-online-shop-backend  express生成后端项目

    在vue-online-shop-backend安装yarn

    npm run start  http://localhost:3000/ 启动后端

    在vue-online-shop-frontend中

    npm run start http://localhost:8080 启动前端

  - 管理后台 react + antd

- API后端 服务器端 node+javaweb

  ### 在vue-online-shop-backend中

  1. app.js 

     var apiRouter= require('./routes/api') 引入路由模块

     app.use('/api/v1', apiRouter); 定义后端路由（v1：路由版本；restful风格）

     可以访问  http://localhost:3000/api/v1 （需要重启npm run start）

     - 后端解决跨域（app.all）

       ```js
       app.all('/*', function(req, res, next) {
         // CORS headers
         res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
         res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
         // Set custom headers for CORS
         res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
         if (req.method == 'OPTIONS') {
           res.status(200).end();
         } else {
           next();
         }
       });
       ```

     

  2. controllers文件夹 控制器

     - manufacturers.js

  3. routes文件夹

     - 创建api.js，并把index.js的内容复制到api.js中

       const mongoose = require('mongoose');

       前后端api通信流程

       ```markdown
       localhose:3000/users/:shunwuyu
       {
       	name: 'shunwuyu',
       	sex: '男'
       }
       ^/api/v1/users/:shunwuyu
       1. url响应 /api/ 
         添加路由 /api/v1
         app.use(启用路由)
       2. 返回json
       3. postman模拟请求
       4. 前端请求
       5. 跨域（请求的域名或端口或协议不一致）
       ```

     - api文件夹

       ```js
       设计RESTFUL：一切皆资源 URL
       url + 请求谓语动词
       POST 增加
       PUT 修改
       /api/v1/manufacturer GET [{name: '小米'}]
       /api/v1/manufacturer POST body {}
       ```

       ```js
       const express = require('express');
       const router = express.Router();
       const manufacturerController = require('../../controllers/manufacturers');
       
       // 控制层，当访问/manufacturers时的操作
       // url 访问的路口
       router.post('/manufacturers', manufacturerController.create);
       // 当访问/api/v1/manufacturers跳转到控制层manufacturers.js的create方法
       ```

  4. model文件夹

     数据库表到实体类的映射