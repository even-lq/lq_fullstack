// components/cScrollView/cScrollView.js
const { throttle } = require('../../utils/utils');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: Number,
    status: {
      type: Number,
      value: 0 //0 数据加载中， 1数据加载完成 2没有更多数据了， 对外仅可接收1和2
    },
    isData: { // 正在加载的样式
      type: Boolean,
      value: true
    },
    currentPage: {
      type: Number,
      value: 1 // 页码
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstLoading: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动到底部事件
    // 节流
    scrollToLower: throttle(function() {
        if (this.data.status === 0) {
          this.setData({
            currentPage: this.data.currentPage + 1,
          })
          //对外暴露一个getmoredata事件，用户获取下一页对数据
          this.triggerEvent("getmoredata", { currentPage: this.data.currentPage })
        } else if (this.data.status === 2) {
          this.setData({ status: 2 });
        }
      
    }, 2000),
    
  },

  /**
   * 监听器
   */
  // observers: {
  //   "status": function (newStatus) {
  //     const showMessage = newStatus !== 1
  //     let timer = null
  //     if (this.data.timer !== null) {
  //       clearTimeout(this.data.timer);
  //       this.setData({ timer: null });
  //     }

  //     if (newStatus === 2) {
  //       timer = setTimeout(() => {
  //         this.setData({
  //           showMessage: false,
  //           timer: null
  //         }, 2000)
  //       })
  //     }
  //     const data = {
  //       showMessage,
  //       timer
  //     }
  //     this.setData(data)
  //   }
  // }
})
