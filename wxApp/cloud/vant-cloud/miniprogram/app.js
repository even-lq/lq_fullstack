//app.js
App({
  onLaunch: function (options) {
    const self = this
    console.log(options);
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud-lq-1gku60tzaccb09e4',
        traceUser: true,
      })
    }
    // this.globalData.shareParam = options.query // 分享属性
    // 查看是否授权登录
    wx.getSetting({
      success: (result) => {
        console.log(result);
        // 授权成功
        if (result.authSetting['scope.userInfo']) {
          // 获取用户信息
          wx.getUserInfo({
            success (infoRes) {
              console.log(infoRes);
              self.globalData.userInfo = infoRes.userInfo
              wx.cloud.callFunction({
                name: 'createUser',
                data: {
                  avatarUrl: infoRes.userInfo.avatarUrl,
                  name: '',
                  nickName: infoRes.userInfo.nickName,
                  sex: infoRes.userInfo.gender
                }
                // success(res) {
                //   console.log(res);
                
                // },
                // fail(err) {
                //   console.log(err);
                // },
              })
            }
          })
        } else {
          // wx.redirectTo({
          //   // 登陆完后跳转上一层
          //   url: `pages/login/login?back=${options.path.split('/')[1]}`
          // })
            
        }
      }
    });
      
    this.globalData = {}
  }
})
