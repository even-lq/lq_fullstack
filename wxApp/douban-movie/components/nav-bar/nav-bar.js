// components/nav-bar/nav-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 父组件传过来
    title: {
      type: String,
      value: ''
    },
    statusBarColor: {
      type: String,
      value: '#fff'
    },
    navBarColor: {
      type: String,
      value: '#fff'
    },
    titleColor: {
      type: String,
      value: '#000'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topHeight: 0,
    statusBarStyle: '',
    navBarStyle: ''

  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      // properties和data数据源的取法相同
      let navBarStyle = `background-color: ${this.data.navBarColor};
      height:${wx.db.navBarHeight}px;color: ${this.data.titleColor}`

      let statusBarStyle = `background-color: ${this.data.statusBarColor};
      height:${wx.db.statusBarHeight}px;`

      let topHeight = wx.db.navBarHeight + wx.db.statusBarHeight

      this.setData({
        // 单词一致时可以只写一个
        navBarStyle: navBarStyle,
        statusBarStyle,
        topHeight
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})