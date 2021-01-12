module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 让/api 代替 target的url发起接口请求
        target: 'http://ustbhuangyi.com/sell/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }

      }
    }
  }
}