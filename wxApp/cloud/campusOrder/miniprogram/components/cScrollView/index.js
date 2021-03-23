// components/cScrollView/cScrollView.js
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
    isData: {
      type: Boolean,
      value: true
    }
    // firstLoading: {
    //   type: Boolean,
    //   value: true
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentPage: 1,
    firstLoading: true,
    // showMessage: false,
    // timer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 滑动到底部事件
    scrollToLower() {
      if (this.data.status === 0) {
        this.setData({
          currentPage: this.data.currentPage + 1,
        })
        //对外暴露一个getmoredata事件，用户获取下一页对数据
        this.triggerEvent("getmoredata", { currentPage: this.data.currentPage })
      } else if (this.data.status === 2) {
        this.setData({ status: 2 });
      }
    },
    // 滑动开始
    // scrollStart() {
    //   if (!this.data.firstLoading) {
    //     this.setData({
    //       firstLoading: false
    //     })
    //   }
      
    // }
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
