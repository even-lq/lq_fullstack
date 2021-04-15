let QQMapWX = require('../../utils/JavaScriptSDK-v1.2/qqmap-wx-jssdk.js');
let qqmapsdk;
const { globalData } = getApp()
const { mToKm, addProperty, filterObjectArray } = require('../../utils/utils');
const { mapSearch, calculateDistance } = require('../../utils/map');
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
    markersID: '', // 控制卡片边框颜色
    dataStatus: 0,//0 数据加载中， 2没有更多数据了， 对外仅可接收1和2， 
    pageNumber: 1, // 页码
    contentHeight: 0,
    // 地图导航栏的location
    location: {
      longitude: 0,
      latitude: 0,
      title: ''
    },
    // map标签的经纬度
    mapLongitude: 0,
    mapLatitude: 0,
    showActionsheet: false, // 电话底部菜单
    isData: true, // 判断是否第一次加载makers
    groups: [],

  },
  // 获取地图信息
  getUserInfo(e) {
    console.log(e.detail.userInfo)
  },
  // 初始化地图
  mapInit: function (longitude, latitude, pageIndex = 1) {
    console.log(pageIndex);
    let _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: '大学',  //搜索关键词
      location: {
        latitude,
        longitude
      },  //设置周边搜索中心点
      page_index: pageIndex,
      success: function (res) { // 搜索成功后的回调
        // 加载完数据了
        if (res.data.length === 0) {
          _this.setData({
            dataStatus: 2
          });
          return
        }
        let mks = []

        // 第一次图片显示的学校
        if (pageIndex === 1) {
          _this.setData({
            mapLongitude: res.data[0].location.lng,
            mapLatitude: res.data[0].location.lat,
          });
        }

        let [...location] = res.data
        let arr = filterObjectArray(location)
        let distanceArr = []
        calculateDistance(globalData.location, arr)
          .then(res => {
            distanceArr = res.elements
            console.log(distanceArr);
            return Promise.resolve(distanceArr)
          }).then((distanceArr) => {
            console.log(distanceArr, res);
            for (var i = 0; i < res.data.length; i++) {
              mks.push({ // 获取返回结果，放到mks数组中
                title: res.data[i].title,
                address: res.data[i].address,
                _distance: mToKm(distanceArr[i].distance),
                tel: res.data[i].tel,
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
              
            }



            if (pageIndex === 1) {
              _this.setData({ //设置markers属性，将搜索结果显示在地图中
                markers: mks,
                // circles: ccs
              })

            } else {
              if (_this.data.markers) {
                console.log(mks);
                console.log(_this.data.markers);
                let tempMarkers = _this.data.markers
                mks.forEach(item => {
                  tempMarkers.push(item)
                });
                _this.setData({ //设置markers属性，将搜索结果显示在地图中
                  markers: tempMarkers,
                  // circles: ccs
                })
              }
            }

            // 是否第一次加载markers，用于缩小正在加载
            if (_this.data.markers.length !== 0) {
              _this.setData({
                isData: false
              });
              console.log(_this.data.isData);
            }



          })

      },
      fail: function (res) {
        console.log(res);
      },

    });
  },
  // 计算Dom
  calculateDom() {
    let query = wx.createSelectorQuery();
    query.select('.map-nav').boundingClientRect()
    query.select('.map-control').boundingClientRect()

    query.exec(res => {
      // console.log(res[0].height);
      // console.log(res[1].height);
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

        let location = {
          longitude: res.longitude,
          latitude: res.latitude,
        }
        mapSearch(true, location).then(res => {
          self.setData({
            location: addProperty(location, 'title', res.title)
          })
          // addProperty(globalData.location, 'title', res.title)
        })
        self.mapInit(globalData.location.longitude, globalData.location.latitude)
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
    let self = this
    console.log(event);

    wx.chooseLocation({
      latitude: globalData.location.latitude,
      longitude: globalData.location.longitude,
      scale: 14,
      name: self.data.markers[0].title,
      success(res) {
        console.log(res);
        self.setData({
          mapLongitude: res.longitude,
          mapLatitude: res.latitud,
          dataStatus: 0,
          pageNumber: 1
        })
        self.mapInit(res.longitude, res.latitude)
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
  getMoreData(e) {
    if (e.detail.currentPage > 1) {
      console.log(e.detail.currentPage);
      this.mapInit(globalData.location.longitude, globalData.location.latitude, e.detail.currentPage)

    }
  },
  // 点击某个学校卡片
  cardTap(e) {
    let self = this
    let subScript = e.currentTarget.dataset.sub
    // 卡片选中态的颜色和地图显示
    this.setData({
      markersID: e.currentTarget.dataset.index,
      mapLongitude: self.data.markers[subScript].longitude,
      mapLatitude: self.data.markers[subScript].latitude,
    });

  },
  // 电话按钮底部弹窗的选项
  phoneClick(e) {
    console.log(e);
    if (e.detail.value) {
      wx.makePhoneCall({
        phoneNumber: e.detail.value //仅为示例，并非真实的电话号码
      })
    }
  },
  //定位按钮
  iconTap(e) {
    console.log(e.target.dataset.index);
    let index = e.target.dataset.index
    if (e.target.dataset.index === 'tel') {
      let tel = e.target.dataset.tel === '' ? '暂无联系方式' : e.target.dataset.tel
      this.setData({
        groups: [
          { text: tel, value: 1, },
          { text: '呼叫', value: tel }
        ],
        showActionsheet: true
      })
    } else if (typeof e.target.dataset.index === 'number') {
      // latitude: globalData.location.latitude,
      //   longitude: globalData.location.longitude
      wx.openLocation({
        latitude: this.data.markers[e.target.dataset.index].latitude,
        longitude: this.data.markers[e.target.dataset.index].longitude,
        scale: 18,
        name: this.data.markers[index].title,
        address: this.data.markers[index].address,
      })

    }

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
    console.log('order', getCurrentPages());
    this.tabBar()




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