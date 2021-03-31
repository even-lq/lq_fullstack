// components/tab/tab.js
const { getRpx } = require('../../utils/utils');
const { bus } = getApp().globalData
// const { windowWidth } = getApp().globalData;

Component({
  lifetimes: {
    attached: function () {
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
    leftMargin: [],
    tabWidth: 0,

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
        let [{ left: left1, width: tabWidth }, { left: left2, right: right2, }] = [...res[0]]
        console.log(right2 - left1);
        let maxWidth = right2 - left1 // 一次tab所能移动的最大宽度
        this.setData.call(self, {
          leftMargin: [left1 * getRpx(), left2 * getRpx()], // 收集边距
          tabWidth: tabWidth * getRpx()
        }, function () {
            bus.emit('getTab', {
              tabWidth: self.data.tabWidth, 
              maxWidth,
              leftMargin: self.data.leftMargin,
            })
        })
      })
    },
    clickTab() {

    }
  }
})
