let { eventBus } = require('./utils/eventBus.js')
//app.js
App({
  onLaunch: function () {
    let self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }


    wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        self.globalData.systemInfo = res
        self.globalData.screenHeight = wx.getSystemInfoSync().screenHeight;
        self.globalData.windowHeight = wx.getSystemInfoSync().windowHeight;
        self.globalData.windowWidth = wx.getSystemInfoSync().windowWidth * 2
      },
      fail: () => { },
      complete: () => { }
    });

    




    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (result) => {
              // console.log(result);
              // console.log(result.userInfo);
            },

          });

        }
      },

    });


    // this.
  },
  globalData: {
    screenHeight: 0,
    windowHeight: 0,
    windowWidth: 0,
    location: {},
    systemInfo: {},

    bus: eventBus
  }
})
