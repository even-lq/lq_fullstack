// components/swiper/swiper.js
const { bus } = getApp().globalData
const { getRpx } = require('../../utils/utils');

Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  lifetimes: {
    attached: function () {
      let self = this
      // 在组件实例进入页面节点树时执行
      bus.on('getNode', res => {
        self.setData({
          length: self.data.length + res
        }, function () {
          console.log(self.data.length);
        })

      })

      console.log(this.data.windowWidth);


    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
    ready() {

    }

  },

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // itemNode
    windowWidth: wx.getSystemInfoSync().windowWidth * getRpx(),
    length: 0,
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})