// 工具js的假入口
import config from './config'
import * as Mock from './mock'

let util = {
  isDev: config.isDev,
  // 封装打印函数：测试打印数据
  log() {
    this.isDev && console.log(...arguments);
  },
  // 弹出提示框
  alert(title = '提示', content = config.defaultAlertMessage) {
    // 判断原始类型
    if(typeof content === 'object') {
       content = this.isDev && JSON.stringify(content)
    }

    wx.wx.showModal({
      title: title,
      content: content
    });
      
  },
  // 去微信小程序本地缓存的指定key value
  getStorageData(key, callback) {
    wx.getStorage({
      key: key,
      success (res) {
        // res = 去到的值
        callback && callback(res.data)
      },
      fail (err) {
        this.log(err)
      }
    })
  },
  // 往微信小程序本地存指定数据
  setStorageData(key, value = '', callback) {
    wx.setStorage({
      key: key,
      data: value,
      success () {
        callback && callback()
      }
    })
  },
  // 向接口发送请求
  request (option) {
    // es6对象解构
    let {url, data, header, method, dataType, mock = false} = option
    // 因为wx.request封装好的网络请求里面的this可能会与对象util发生冲突，所以保留this
    let self = this
    return new Promise((resolve, reject) => {
      if (mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]
        }
        if (res && res.statusCode == 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示', res)
          reject(res)
        } 
        
      }else {
        wx.request({
          url: url,
          data: data,
          header: header || { 'content-type': 'application/json' },
          method: method || 'GET',
          dataType: dataType || 'json',
          success(res) {
            if (res && res.statusCode == 200 && res.data) {
              resolve(res.data)
            } else {
              self.alert('提示', res)
              reject(res)
            }
          },
          fail(err) {
            self.log(err)
            self.alert('提示', err)
            reject(err)

          }
        })
      }
    })
  }
}

export default util