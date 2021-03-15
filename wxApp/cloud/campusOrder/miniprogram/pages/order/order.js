let QQMapWX = require('../../utils/JavaScriptSDK-v1.2/qqmap-wx-jssdk.js');
let qqmapsdk;
const { globalData } = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    circles: [],
    animation: {},
    mapFlag: false,
    searchWidth: false,
    dataStatus: 0,//0 数据加载中， 2没有更多数据了， 对外仅可接收1和2， 
    contentHeight: 0,
    location: {
      longitude: 0,
      latitude: 0,
    }
  },
  // 获取地图信息
  getUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  // 初始化地图
  mapInit: function () {
    var _this = this;
    console.log();
    // 调用接口
    qqmapsdk.search({
      keyword: '大学',  //搜索关键词
      location: {
        latitude: globalData.location.latitude,
        longitude: globalData.location.longitude
      },  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        // var ccs = this.data.circles || [];
        for (var i = 0; i < res.data.length; i++) {
          console.log(res.data[i].title);
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            address: res.data[i].address,
            _distance: parseInt(res.data[i]._distance),
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
  // 计算Dom
  calculateDom() {
    let query = wx.createSelectorQuery();
    query.select('.map-nav').boundingClientRect()
    query.select('.map-control').boundingClientRect()

    query.exec(res => {
      console.log(res[0].height);
      console.log(res[1].height);
      this.setData({
        contentHeight: globalData.windowHeight - res[0].height - res[1].height
      })
      console.log(this.data.contentHeight, 123);
    })
  },
  // 获取定位
  getCoordinate() {
    let self = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        globalData.location.latitude = res.latitude
        globalData.location.longitude = res.longitude
        // 初始化地图
        self.mapInit()
      }
    })

  },
  // 收起地图
  mapControl() {
    this.setData({
      mapFlag: !this.data.mapFlag,
    })
    if (this.data.mapFlag) {
      this.setData({
        contentHeight: this.data.contentHeight + 225
      })
      
    } else if (!this.data.mapFlag || !this.data.mapFlagFromPhone) {
      setTimeout(() => {
        this.setData({
          contentHeight: this.data.contentHeight - 225
        })
      }, 300);

    }

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
    // wx.choosePoi({
    //   // latitude,
    //   // longitude,
    //   // scale: 14,
    //   // name: self.data.markers[0].title,
    //   success(res) {
    //     console.log(res);
    //   }
    // })

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
          name: self.data.markers[0].title,
          success(res) {
            console.log(res);
          }
        })
      }
    })
  },
  // 地图导航栏的搜索框
  campusSearch() {
    console.log('地图导航栏的搜索框');
    this.setData({
      searchWidth: !this.data.searchWidth
    })
    // console.log(this.data.searchWidth);
  },
  // 显示导航标题栏
  navTitleShow() {
    this.setData({
      searchWidth: !this.data.searchWidth
    })
  },
  // 点击地图的某个学校
  maptap(event) {
    console.log(event);
    let { latitude, longitude } = event.detail
    console.log(latitude, longitude);
  },
  // 加载更多学校的数据
  getMoreData(event) {
    console.log(event);
  },
  tabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this

    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'W5JBZ-EIH3P-T2YDB-LACR3-KL5UE-PGBUE'
    });

    // 获取地理位置
    this.getCoordinate()

    // 计算Dom
    this.calculateDom()

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
    this.tabBar()

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