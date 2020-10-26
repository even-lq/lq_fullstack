//index.js
const db = wx.cloud.database() // 引入数据库
const _ = db.command   // CRUD 增删改查命令 设置为常量
const productsCollection = db.collection('products')   // 引入数据表
const photos = db.collection('photos')
const app = getApp()

Page({
  data: {
    products: [],
    photos: [],
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  upload() {
    // 在相机里面选择
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        // console.log(res);
        const tempFilePaths = res.tempFilePaths
        for (let i = 0; i < tempFilePaths.length; i++) {
          // floor向下取整  ''类型转换
          let randString = + new Date() + '' + Math.floor(Math.random() * 1000000) + '.png'; // 时间戳  + new Date(); +号类型的转换
          wx.cloud.uploadFile({
            cloudPath: randString,
            filePath: tempFilePaths[i],
            success: res => {
              console.log(res);
              // 图片上传成功的状态码
              if(res.statusCode == 200) {
                // 添加字段 promise
                photos.add({
                  data: {
                    image:res.fileID
                  }
                })
                .then(res => {
                  wx.showToast({
                    title: '上传成功',
                    icon:'success'
                  })
                })
              }
            }
          })
          
          
        }
      }
    })
  },

  onLoad: function() {
    productsCollection
      .get()
      .then(res => {
        this.setData({
          products: res.data
        })
      })
    photos
      .get()
      .then(res => {
        this.setData({
          photos: res.data
        })
      })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
