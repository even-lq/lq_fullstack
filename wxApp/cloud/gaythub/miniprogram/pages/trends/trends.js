// pages/trends/trends.js
const github = require('../../api/github.js')

const timeRange = [
  { label: 'Daily', value: 'Daily' },
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' }
]

const languages = [
  'All',
  'C', 'CSS', 'C#', 'C++',
  'Dart', 'Dockerfile',
  'Erlang',
  'Gradle', 'Go',
  'HTML', 'Haskell',
  'Java', 'JavaScript', 'JSON', 'Julia',
  'Kotlin',
  'MATLAB',
  'Python', 'PHP',
  'R', 'Ruby', 'Rust',
  'Shell', 'SQL', 'Swift',
  'TeX',
  'Vue'
].map(it => ({ label: it, value: it }))

const sinceCacheKey = 'Trending:Since'
const langCacheKey = 'Trending:Lang'
const trendsCacheKey = 'Trending:Data'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    since: timeRange[wx.getStorageSync(sinceCacheKey) || 0], // 从何时开始
    lang: languages[wx.getStorageSync(langCacheKey) || 0], // 语言
    selectorValues: [timeRange, languages],
    // 从本地缓存中同步获取指定 key 对应的内容。
    selectedIndices: [wx.getStorageSync(sinceCacheKey) || 0, 
      wx.getStorageSync(langCacheKey) || 0],// 第一项作为默认选项的下标
    // wx.getStorageSync(sinceCacheKey) || 0, wx.getStorageSync(langCacheKey) || 0
    theme: '',
    // 保存上一次的浏览记录
    trends: wx.getStorageSync(trendsCacheKey) || []
  },
  changeFilter: function (event) {
    const selectedIndices = event.detail.value
    this.setData({ selectedIndices })
    // 把页面滚动到顶部
    wx.pageScrollTo({
      scrollTop: 0
    })
    // 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
    wx.startPullDownRefresh({})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。
    wx.startPullDownRefresh({})
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
    this.reloadData()
  },
  reloadData() {
    const [timeIndex, langIndex] = this.data.selectedIndices
    const lang = languages[langIndex] || languages[0]
    const since = timeRange[timeIndex] || timeRange[0]
    this.setData({ lang, since }, () => {
      wx.setStorage({
        key: sinceCacheKey,
        data: timeIndex,
      })
      wx.setStorage({
        key: langCacheKey,
        data: langIndex,
      })
    })
    console.log('reloaddata');

    // github：前后端接口
    // github API封装 应用所有的请求由github提供
    // trendings方法（时间语言小写）
    github.trendings(since.value.toLowerCase(),
      lang.value.toLowerCase())
      .then(data => {
        console.log(data);
      })
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