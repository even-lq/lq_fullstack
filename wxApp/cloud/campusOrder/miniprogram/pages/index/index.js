// miniprogram/pages/index/index.js
let QQMapWX = require('../../utils/JavaScriptSDK-v1.2/qqmap-wx-jssdk.js');
let qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    circles: [],
    mapFlag: false,
    animation: {},
    mapLocatBtn: 'color: #000;background-color: #fff;height:100%;border:none;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;padding-left:20rpx;',
    location: {
      name: '',
      longitude: '',
      latitude: '',
    }
  },
  // 获取地图信息
  getUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  nearby_search: function () {
    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: '大学',  //搜索关键词
      location: '28.718,115.826044',  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        // var ccs = this.data.circles || [];
        for (var i = 0; i < res.data.length; i++) {
          console.log(res.data[i].title);
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/images/university.png", //图标路径
            callout: {
              display: 'ALWAYS',
              content: res.data[i].title,
              padding: 3,
              borderRadius: 3,
              borderWidth: 2,
              borderColor: '#64B5F6',
            },
            width: 20,
            height: 20
          })

          // ccs.push({
          //   latitude: res.data[i].location.lat,
          //   longitude: res.data[i].location.lng,
          //   color: '#C16F7A',
          //   fillColor: '#AECFF2',
          //   radius: 160,
          //   strokeWidth: 1
          // })

        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks,
          // circles: ccs
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  },
  mapControl() {
    this.setData({
      mapFlag: !this.data.mapFlag
    })
    console.log(this.data.mapFlag);

    // this.animation = wx.createAnimation({
    //   duration: 300,
    //   timingFunction: 'ease', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
    //   transformOrigin: 'center',
    //   // 50% 50 % 0
    //   success: function (res) {
    //     console.log("res")
    //   }
    // })

    // if (this.data.mapFlag) {
    //   // this.animation.translateY(0).step()
    //   this.animation.rotate(180).step()
    //   this.setData({
    //     animation: this.animation.export()
    //   })
    // } else {
    //   // this.animation.translateY(1).step()
    //   this.animation.rotate(0).step()
    //   this.setData({
    //     animation: this.animation.export()
    //   })
    // }
    
  },
  // 点击地图导航栏
  mapNav(event) {
    let self = this
    console.log(event);
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(res);
        wx.chooseLocation({
          latitude,
          longitude,
          scale: 14,
          name: self.data.markers[0].title
        })
      }
    })
  },
  // 点击地图的某个学校
  maptap(event) {
    let { latitude, longitude } = event.detail
    console.log(latitude, longitude);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        let screenHeight = wx.getSystemInfoSync().windowHeight;
        console.log(res, screenHeight);

      },
      fail: () => { },
      complete: () => { }
    });



    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'W5JBZ-EIH3P-T2YDB-LACR3-KL5UE-PGBUE'
    });

    this.nearby_search()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    qqmapsdk.search({
      keyword: '大学',
      page_size: 20,
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
    })


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})