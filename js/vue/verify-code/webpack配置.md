### webpack配置

#### webpack配置

##### package.json

1. name: 项目的名字，也是node package的名字（项目发布到node平台的名字）

2.  "private": false, 是否私有

    "main":"lib/verigy-code.umd.main.js", 包的入口文件

    "author": "wn", 作者

    "description": "test", 包的描述

    "keywords": [ 拱搜索的关键词

     "vue",

     "verify-code",

     "wn-verify-code"

    ],

3.  scripts下的命令都可以用npm run + 键名 执行

   "scripts": {

     "serve": "vue-cli-service serve",

     "build": "vue-cli-service build",

     "lint": "vue-cli-service lint",

     "lib": "vue-cli-service build --target lib --name verigy-code --dest lib ./src/main.js"

   以 ./src/main.js 作为入口文件来进行打包

    },

##### vue.config.js

1. ```js
   module.ex = {
     css: {
       extract: false 不把组件的css打包成一个单独的css文件
     }
   }
   ```

##### verify-code.vue

1. v-model.trim.number

   - [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
   - [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤

2. keydown(keyup)的event

   - keycode：代表键盘每个键的编码
   - returnValue：默认true，设置为false则keydown不会返回value
   - key：value值

3. this.$set(this.code, n - 1, event.key)

   动态设置data，限制input框只输入一位数（节流，防抖也可以）

##### main.js

1. 引入的组件能被Vue的实例use的前提条件是该组件具有install属性（是函数）

##### 打包发布

1. 登录

   npm login：出现错误 => 切换回npm源

   `npm config set registry=http://registry.npmjs.org`

2. npm run lib

3. npm publish

   测试

   npm install lq-verify-code-0.1.0.tgz

##### 使用









