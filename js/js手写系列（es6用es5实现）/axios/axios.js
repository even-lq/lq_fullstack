// 拦截器
class InterceptorsManage {
  constructor() {
    this.handlers = []
  }
  use (fullfield, rejected) {
    this.handlers.push({
      fullfield,
      rejected
    })
  }
}


class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorsManage(),
      response: new InterceptorsManage()
    }
  }
  // 核心，request发起接口请求
  request(config) {
    
    // 拦截器和请求函数装进队列
    let chain = [this.sendAjax.bind(this), undefined]

    // 请求拦截
    this.interceptors.request.handlers.forEach(interceptor => {
      // unshift 头插
      chain.unshift(interceptor.fullfield, interceptor.rejected)
    })

    // 响应拦截
    this.interceptors.response.handlers.forEach(interceptor => {
      // unshift 头插
      chain.push(interceptor.fullfield, interceptor.rejected)
    })
    
    // 执行队列，每次只执行一对
    let promise = Promise.resolve(config)
    while (chain.length > 0) {
      promise = promise.then(chain.shift(), chain.shift())
    }
    return promise
  } 
  sendAjax(config) {
    return new Promise(resolve => {
      const { url = '', method = '', data = {} } = config

      const xhr = new XMLHttpRequest()
      xhr.open(method, url)
      xhr.send(data)
      xhr.onload = function () {
        // console.log(xhr.responseText);
        resolve(xhr.responseText)
      }
    })
  }
}

// 请求method
const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post']
methodsArr.forEach(med => {
  Axios.prototype[med] = function() {
    if (['get', 'delete', 'head', 'options'].includes(med)) {
      return this.request({
        // 只能两个参数
        method: med,
        url: arguments[0],
        ...arguments[1] || {}
      })
    } else {
      // 三个参数
      return this.request({
        method: med,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2] || {}
      })
    }
  }
}) 

const utils = {
  // 把原型混入到方法中
  extend (a, b, context) {
    for (let key in b) {
      if (b.hasOwnProperty(key)) {
        if (typeof b[key] === 'function') {
          a[key] = b[key].bind(context)
        } else {
          a[key] = b[key]
        }
        
      }
    }
  }
}

function createAxios() {
  let axios = new Axios()
  let req = axios.request.bind(axios)
  // 混入请求method
  utils.extend(req, Axios.prototype, axios)
  // 混入interceptors
  utils.extend(req, axios)
  return req
}

let axios = createAxios()