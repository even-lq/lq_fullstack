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
6. npm install --save koa2-cors 解决跨域

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

5. npm install vue-quill-editor --save vue富文本编辑器

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

4. sessionStorage防止刷新丢失数据

   `    sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))`

5. 路由钩子函数

   修改页面标题

   ```js
   // main.js
   router.beforeEach((to, from, next) => {
     document.title = to.meta.title
     next()
   })
   ```

##### CSS

1. style绑定样式

   ```css
    :style="`background-image:url(${avatar})`
   ```

2. 关于图标的高度

   如果图标是i标签，可以在外套一层div用高度和行高撑开div的高度从而看起来使得图标变高

   ```html
   <header>
       <div @click="menu"><van-icon name="wap-nav" size="20px" /></div>
       <div>
           <van-icon name="like" size="20px" />
           <van-icon name="search" size="20px" />
       </div>
   </header>
   ```

   ```js
   header {
       display: flex;
       height: 1.2rem;
       line-height: 1.2rem;
       justify-content: space-between;
       margin: 10px 0;
       .van-icon-like {
           margin-right: 10px;
       }
   }
   ```

   ![图标外的div高度](E:\study\StudyProjects\lq_fullstack\js\vue\project\notebook\图标外的div高度.png)

   ![图标高度](E:\study\StudyProjects\lq_fullstack\js\vue\project\notebook\图标高度.png)

3. 渲染富文本

   ```html
   <div class="content" v-html="noteDetail.note_content"></div>
   ```

4. 富文本编辑

#### 后端

##### 跨域

```js
const cors = require('koa2-cors');
app.use(cors());
```

##### controllers 控制层

1. defaultConfig.js 数据库的options
2. mySqlConfig.js 连接数据库
   - 连接线程池
   - 封装查询方法allServices.query()

##### routes 路由层

1. `router.prefix('/users')`

   路由前缀，当前代码下的所有路由都会被加上路径`/users`