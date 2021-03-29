// components/swiperItem/swiperItem.js
const { bus } = getApp().globalData
Component({
  // behaviors: ['wx://component-export'],
  // export() {
  //   return { myField: 'myValue' }
  // },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.getNodeInfo()


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
    // nodesLength: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNodeInfo() {
      // let self = this
      let query = wx.createSelectorQuery().in(this);
      query.select('.mySwiperItem').boundingClientRect()
      query.exec(res => {
        console.log(res.length);
        bus.emit('getNode', res.length)
      })
    }
  }
})
