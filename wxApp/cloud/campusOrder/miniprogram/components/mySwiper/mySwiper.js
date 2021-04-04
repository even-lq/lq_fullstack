// components/swiper/swiper.js
const { getRpx } = require('../../utils/utils');
const { bus } = getApp().globalData

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
        })
      })
      this.getTab()

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
    // swiper
    windowWidth: wx.getSystemInfoSync().windowWidth,
    length: 0,

    // tab
    leftMargin: [],
    translateX: 0,
    tabWidth: 0,
    bottom: 0,
    tabIndex: '0'
 

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取每个tab的信息
    getTab() {
      let self = this

      let query = this.createSelectorQuery();
      query.selectAll('.tab-item__content').boundingClientRect()
      query.exec(res => {

        let leftMargin = self.getMargin([...res[0]]) // 获取左右边距
        let [{ top: top }, { width: tabWidth }] = [...res[0]] // 获取tab宽度
        tabWidth = tabWidth * getRpx()
        top = top * getRpx() / 2
        // console.log(leftMargin);

        this.setData.call(self, {
          leftMargin, // 收集边距
          tabWidth,
          bottom: top,
          translateX: leftMargin[0]
        })
      })
    },
    getMargin(arr) {
      let leftMargin = []
      if (arr.length !== 0) {
        for (const item of arr) {
          leftMargin.push(item.left * getRpx())
        }
      }

      return leftMargin
    },
    clickTab(e) {
      let lastIndex = this.data.tabIndex
      let index = (Number(e.target.dataset.index) || Number(e.target.dataset.index) === 0)  ? Number(e.target.dataset.index) : Number(lastIndex)
      // console.log(e.target.dataset.index);
      this.setData({
        tabIndex: e.target.dataset.index ? e.target.dataset.index :lastIndex ,
        translateX: this.data.leftMargin[index]
      })
    }
  }
})
