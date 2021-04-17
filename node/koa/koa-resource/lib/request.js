// 解决为什么koa里面没有req的问题
let url = require('url')
let request = {
  get url() {
    return this.req.url;
  },
  get path() {
    // path只拿路径，不拿参数
    return url.parse(this.req.url).pathname;
  }
}

module.exports = request