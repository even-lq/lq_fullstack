## 记事本vue+koa(脚手架开发)

koa完整开发（koa脚手架）

### 项目配置

#### 后端

1. koa-generator 全局安装（npm i koa-generator -g）

2. 创建项目

    koa2 notebook-server -e --ejs

3. 进入到notebook-server后npm i 

4. 执行sql下的noteBook.sql

   `source e:/study/StudyProjects/lq_fullstack/js/vue/project/notebook/notebook-server/sql/noteBook.sql;`

5. npm i mysql

#### 前端

1. vue create notebook-client

2. npm i amfe-flexible 获取屏幕的宽度（自适应）

   在main.js中 import 'amfe-flexible'

3. npm i vant -S 默认样式重置（可以用用ui框架）

   ```js
   // 按需引用
   import { Swipe, SwipeItem } from 'vant';
   import 'vant/lib/index.css'
   
   Vue.use(Swipe).use(SwipeItem); // 链式引用
   ```

4. npm i axios

### 项目要点

#### 前端

##### js

1. data中获取静态资源需要require

   ```js
   data() {
       return {
         avatar: require('./../../assets/img/raw_1512446140.jpeg'),
         username: '',
         userpwd: ''
       }
     },
   ```

2. 去除空格的检验字符

   ```js
   if (this.username.trim() = "" || this.userpwd.trim() == "") { }
   ```

3. 模块挂载Vue原型

   ```js
   import axios from 'axios'
   
   Vue.prototype.$http = axios
   ```

   

##### CSS

1. style绑定样式

   ```css
    :style="`background-image:url(${avatar})`
   ```

#### 后端

##### controllers 控制层

1. defaultConfig.js 数据库的options
2. mySqlConfig.js 连接数据库
   - 连接线程池
   - 封装查询方法allServices.query()

##### routes 路由层

1. `router.prefix('/users')`

   路由前缀，当前代码下的所有路由都会被加上路径`/users`