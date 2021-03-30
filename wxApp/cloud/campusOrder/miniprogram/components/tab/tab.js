// components/tab/tab.js
const { getRpx } = require('../../utils/utils');

Component({
  lifetimes: {
    attached: function () {
      this.getLeft()

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
    tabWidth: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取每个tab的左边距
    getLeft() {
      let self = this
      let query = this.createSelectorQuery();
      query.selectAll('.tab-item__content').boundingClientRect()
      query.exec(res => {
        console.log(res);
        let [{ left: left1, width: tabWidth }, { left: left2 }] = [...res[0]]
        console.log([left1, left2]);
        this.setData.call(self, {
          leftMargin: [left1 * getRpx(), left2 * getRpx()],
          tabWidth: tabWidth * getRpx()
        }, function () {
          console.log(self.data.leftMargin);
        })
      })
    },
    clickTab() {
      let self = this
      let test = this.data.tabWidth
      console.log(test);
      // console.log(this.data.leftMargin[0]);
      this.setData({
        tabWidth: test + 100
      }, function () {
          console.log(self.data.tabWidth);
      })
  
    }
  }
})
