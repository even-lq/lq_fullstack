// components/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell: { // 卡片模式：单元格
      type: Boolean,
      value: false
    },
    cellArray: {
      type: Array,
      value: []
    },
    width: { // background-color
      type: Number,
      value: 690
    },
    height: { // height
      type: String,
      value: '250'
    }, 
    top: { // margin-top
      type: Number,
      value: 25
    },
    bdrs: { // border-radius
      type: Number,
      value: 12
    },
    color: { // background-color
      type: String,
      value: '#fff'
    }, 
    boxShadow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cellIndex: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cellStart(e) {
      this.setData({
        cellIndex: e.currentTarget.dataset.index
      })
    },
    cellEnd() {
      this.setData({
        cellIndex: null
      })
    }
  }
})
