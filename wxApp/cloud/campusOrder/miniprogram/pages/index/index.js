// miniprogram/pages/index/index.js
let QQMapWX = require('../../utils/JavaScriptSDK-v1.2/qqmap-wx-jssdk.js');
let qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    circles: []
  },
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
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/images/university.png", //图标路径
            callout: {
              display:'ALWAYS',
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'W5JBZ-EIH3P-T2YDB-LACR3-KL5UE-PGBUE'
    });
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
      complete: function (res) {
        console.log(res);
      }
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