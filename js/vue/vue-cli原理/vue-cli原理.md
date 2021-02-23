## vue-cli原理

### my-app

--save 生产和线上

--save-dev 生产

插件可以能会安装冲突，有时候需要把node_modules删掉再npm i

```js
npm init -y

npm install --save-dev webpack webpack-cli 开发时

webpack --config webpack.dev.config.js --mode=development (开发模式)

npm install -D babel-loader @babel/core @babel/preset-env webpack

(babel-core：调用babel api 进行转码

babel-preset-env：解析es6语法

babel-loader：webpack插件）

npm install --save vue vue语法依赖

npm install --save-dev vue-loader vue-template-compiler vue加载器，vue模板编译器（vue语法 => js语法）

npm i webpack-dev-server --save-dev 静态资源服务器
```



#### src

index.js 入口文件

#### webpack.dev.config.js

```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 文件需要用绝对路径
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),  // __dirname 总是指向当前js文件的绝对路径
// entry：当前文件的绝对路径 + src/index.js(join拼接)
  output: {
    path: path.join(__dirname, './dist'),
    // output：当前文件的绝对路径 + dist文件夹
    filename: 'app.js'
    // 文件夹内的压缩文件名
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配文件
        loader: 'babel-loader',// 使用的加载器
        exclude: /node_modules/ // 排除匹配的文件夹
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin() // 确保插件被引入
  ],
    // 服务器
  devServer: {
    contentBase: path.join(__dirname, './dist'), // 用dist下的文件来响应请求,
    port: '8888',
    open: true, // 自动打开浏览器
    hot: true // 热更新，修改后自动打包和更新
  }
}
```

完了之后就打包，运行打包命令

##### 解决webpack与babel-loader冲突：

- babelrc里面的presets由env改成@babel/preset-env

- > webpack 4.x | babel-loader 8.x | babel 7.x

  ```bash
  npm install -D babel-loader @babel/core @babel/preset-env webpack
  ```

##### 解决webpack与webpack-dev-server版本冲突:

https://juejin.cn/post/6888268842616356878

#### .babelrc

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 7"]
            // 语法解析出来以后仅支持当前版本及之前的两个版本和ie6以上的浏览器
        }
      }
    ]
  ]
}
```

#### package.json

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.dev.config.js --mode=development",
    // 编辑打包命令
    "start": "webpack-dev-server --config webpack.dev.config.js --progress"
  },
```

#### vue的两种模式

##### runtime

```js
new Vue({
  render: h => h(App)
}).$mount('#app')
```

##### compiler

```js
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
```

webpack.dev.config.js 模块同级下

```js
resolve: {
    alias: {
        "vue": 'vue/dist/vue.js'
    }
}
```