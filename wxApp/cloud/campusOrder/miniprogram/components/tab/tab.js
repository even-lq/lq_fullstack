// components/tab/tab.js
const { getRpx } = require('../../utils/utils');
// const { bus } = getApp().globalData
const { windowWidth } = getApp().globalData;

Component({
  lifetimes: {
    attached: function () {
      // this.getTab()
      // bus.on('mySwiper', res => {
      //   this.swiper = res
      // })

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
    // leftMargin: [],
    // translateX: 0,
    // tabWidth: 0,
    // bottom: 0,
    // tabIndex: '0'

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取每个tab的信息
    // getTab() {
    //   let self = this

    //   let query = this.createSelectorQuery();
    //   query.selectAll('.tab-item__content').boundingClientRect()
    //   query.exec(res => {

    //     let leftMargin = self.getMargin([...res[0]]) // 获取左右边距
    //     let [{ top: top }, { width: tabWidth }] = [...res[0]] // 获取tab宽度
    //     tabWidth = tabWidth * getRpx()
    //     top = top * getRpx() / 2
    //     // console.log(leftMargin);

    //     this.setData.call(self, {
    //       leftMargin, // 收集边距
    //       tabWidth,
    //       bottom: top,
    //       translateX: leftMargin[0]
    //     })
    //   })
    // },
    // getMargin(arr) {
    //   let leftMargin = []
    //   if (arr.length !== 0) {
    //     for (const item of arr) {
    //       leftMargin.push(item.left * getRpx())
    //     }
    //   }

    //   return leftMargin
    // },
    // clickTab(e) {
    //   let lastIndex = this.data.tabIndex
    //   let index = Number(e.target.dataset.index) !== undefined ? Number(e.target.dataset.index) : Number(lastIndex)
    //   this.setData({
    //     tabIndex: e.target.dataset.index,
    //     translateX: this.data.leftMargin[index]
    //   })
    // }
  }
})
