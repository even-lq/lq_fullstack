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
    startPoint: null,
    startX: 0,
    translateX: 0,
    seconds: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    touchstart(e) {
      console.log(e.touches[0], e.changedTouches[0]);
      this.setData({
        startPoint: e.changedTouches[0],
        startX: this.data.translateX,
        seconds: '',
      })
     
    },
    touchmove(e) {
      let startX = this.data.startX,
        startPoint = this.data.startPoint,
        diffX = 0;
      let nowPoint = e.changedTouches[0]
      if (startPoint) {
        diffX = (nowPoint.pageX - startPoint.pageX) * 2
      }
     
      this.setData({
        translateX: startX + diffX
      })
    },
    // 定帧处理
    touchend() {
      let len = this.data.length
      // 获取手指停止时的X
      let translateX = this.data.translateX
      translateX = Math.min(0, translateX) // 第一个不能往左滑
      translateX = Math.max(-windowWidth * (len - 1), translateX) // 最后一个不能往右滑
      console.log(-windowWidth * (len - 1), translateX);
      let num = Math.round(-translateX / windowWidth )
      console.log(num);
      
      this.setData({
        seconds: '.3s',
        translateX: -num * windowWidth
      })

    }
  }
})
