const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js", // name默认app.bundle.js
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "我要去字节",
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html", // 打包成标题为我要去字节的index.html，自动引用了打包好的app.bundle.js
    }),
  ],
};