const pubUrl = "http://localhost:3300"//这是我要请求的数据接口的公共部分
exports.http = (options) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: pubUrl + options.url,
      method: options.method || 'get',
      data: options.data || {},
      header: options.header || {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: resolve,
      fail: reject
    })
  })
}

