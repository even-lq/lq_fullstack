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
    width: { // background-color
      type: Number,
      value: 690
    },
    height: { // height
      type: Number,
      value: 250
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
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
