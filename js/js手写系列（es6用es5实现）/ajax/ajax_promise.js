// 基于promise实现ajax

function ajax(options) {
  let url = options.url
  const method = options.method.toLowerCase()
  const async = options.async
  const data = options.data
  
  let xhr = new XMLHttpRequest()
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    // 监听状态变化回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 4: 响应内容解析完成，可以在客户端调用了
        // 304: 服务器给你返回的资源和之前给你返回的资源没有任何变更
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }
    // 错误的回调
    xhr.onerror = err => reject && reject(err) 

    // 处理请求
    let paramArr = [] // 参数数组
    let encodeData; // 参数拼接编译
    // encodeURIComponent()函数通过将一个, 两个，三个或四个表示字符的UTF-8编码的转义
    // 序列替换某些字符的每个实例来编码URI(对于由两个“代理”字符组成的字符而言，将仅是四
    // 个转义序列)。

    // 封装data
    if (data instanceof Object) {
      for (let key in data) {
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }

    // get参数拼接
    if (method === 'get') {
      const index = url.indexOf('?')
      // 没有?
      if (index === -1) url += '?'
      // ?不是最后一个
      else if (index !== url.length - 1) url += '&'

      url += encodeData
    }

    xhr.open(method, url, async)
    if (method === 'get') xhr.send(null)
    else {
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8')
      xhr.send(encodeData)
    }
  })
}

