// 事件触发器
let EventEmitter = require('events')
let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')

// 让koa具有错误处理机制
class Koa extends EventEmitter {
  constructor() {
    super()
    this.fn;
    this.context = context;
    this.request = request;
    this.response = response;
  }

  use(fn) {
    this.fn = fn;
  }

  createContext(req, res) {
    // 构建ctx
    const ctx = Object.create(this.context) // Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response);
    ctx.req = request.req = response.req = req;
    ctx.res = request.res = response.res = res;
    request.ctx = response.ctx = ctx;
    request.response = response;
    response.request = request;
    return ctx
  }

  handleRequest(req, res) {
    let ctx = this.createContext(req, res)
    this.fn(ctx)
    res.end(ctx.body)
  }

  listen(...args) {

    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa