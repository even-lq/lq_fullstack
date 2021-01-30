const axios = require('axios')
const qs = require('qs')

const pubUrl = "http://localhost:3300"//这是我要请求的数据接口的公共部分
exports.http = (options) => {
  return new Promise((resolve, reject) => {
    axios({
      url: pubUrl + options.url,
      method: options.method || 'get',
      data: qs.stringify(options.data) || {},
      header: options.header || {
        'content-type': 'application/x-www-form-urlencoded'
      },
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

