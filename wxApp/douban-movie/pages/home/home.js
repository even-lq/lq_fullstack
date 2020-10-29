// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allMovies: [
      {
        title: "院线热映",
        url: "/v2/movie/in_theaters",
        movies: []
      },
      {
        title: "新片榜",
        url: "/v2/movie/new_movies",
        movies: []
      },
      {
        title: "口碑榜",
        url: "/v2/movie/weekly",
        movies: []
      },
      {
        title: "北美票房榜",
        url: "/v2/movie/us_box",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCity((city) => {
      this.loadData(0, {
        city: city,
        apikey: '0df993c66c0c636e29ecbb5344252a4a'
        // 接口请求的请求头
      })
      this.loadData(1, { apikey: '0df993c66c0c636e29ecbb5344252a4a' })
      this.loadData(2, { apikey: '0df993c66c0c636e29ecbb5344252a4a' })
      this.loadData(3, { apikey: '0df993c66c0c636e29ecbb5344252a4a' })
      this.loadData(4, { apikey: '0df993c66c0c636e29ecbb5344252a4a' })

    })
      // 接口请求的请求头
   

  },
  loadData(idx, params) {
    let obj = this.data.allMovies[idx]
    let url = wx.db.url(obj.url)
    wx.request({
      url,
      data: params,
      header: {
        'content-type': 'json'
      },
      success: (res) => {
        console.log(res);
        let movies = res.data.subjects
        obj.movies = []
        for (let element of movies) {
          let movie = element.subject || element
          // 格式化星星
          this.formatStar(movie)
          obj.movies.push(movie)
        }
        // 刷新整份数据源
        this.setData(this.data)

      }
    })
  },
  formatStar(movie) {
    if(!movie.rating.stars) {
      return
    }
    movie.numberStars = parseInt(movie.rating.stars)
  },
  getCity(succeed) {
    // 拿到经纬度 => 拿到地名
    wx.getLocation({
      success: (res) => {
        // console.log(res);
        // 拿到经纬度逆地址解析转换为城市名
        // 微信发起接口请求:朝百度地图发起请求
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            ak: 'yA40TTkeycduOv81Cu3v9VfUGBs0FUvB',
            output: 'json',
            // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
            coordtype: 'wgs84',
            location: `${res.latitude}, ${res.longitude}`
          },
          success: (res) => {
            // console.log(res);
            // 拿豆瓣的api地址做接口请求，将获取到的城市名传给豆瓣api，拿到当前城市热映的电影数据
            let city = res.data.result.addressComponent.city
            succeed && succeed(city)
          },
          fail: () => {
            console.log(err);
          }
        })
      }
    })
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