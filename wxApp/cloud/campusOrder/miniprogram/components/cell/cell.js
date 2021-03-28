// components/cell/cell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cellArray: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isHighLight: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    highLight(e) {
      this.setData({
        isHighLight: e.currentTarget.dataset.index
      })
      
    },
    changeProfile(e) {
      this.setData({
        isHighLight: null
      })
    }
  }
})
