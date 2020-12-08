// miniprogram/pages/bookSection/bookSection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData: {},
    lastData: [],
    pageData: []
  },

  getSection(url) {
    wx.showLoading({
      title: '正在加载'
    });
    wx.cloud.callFunction({
      name: 'bookSection',
      data: {
        url
      }
    }).then(res => {
      console.log(res);
      wx.hideLoading();
      const { result } = res
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options可以获得页面跳转的参数
    const { url } = options // 对象解构
    this.getSection(url)
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