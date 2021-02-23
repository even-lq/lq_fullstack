const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  // resolve: {
  //   alias: {
  //     "vue": 'vue/dist/vue.js'
  //   }
  // }
  // 服务器
  devServer: {
    contentBase: path.join(__dirname, './dist'), // 用dist下的文件来响应请求,
    port: '8888',
    open: true, // 自动打开浏览器
    hot: true // 热更新，修改后自动打包和更新
  }
}