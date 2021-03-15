// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //当前高亮项
    selected: 0,
    //tabBar页面数据
    tabList: [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/order/order",
        "text": "分类"
      },
      {
        "pagePath": "pages/indent/indent",
        "text": "购物车"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的"
      }
      // {
      //   "pagePath": "pages/index/index",
      //   "text": "首页"
      // },
      // {
      //   "pagePath": "pages/category/category",
      //   "text": "分类"
      // },
      // {
      //   "pagePath": "pages/cart/cart",
      //   "text": "购物车"
      // },
      // {
      //   "pagePath": "pages/user/user",
      //   "text": "我的"
      // }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //底部切换
    switchTab(e) {
      let key = Number(e.currentTarget.dataset.index);
      console.log(key);
      let tabList = this.data.tabList;
      // let selected = this.data.selected;
      
      wx.switchTab({
        url: `/${tabList[key].pagePath}`,
      })
     

      // if (selected !== key) {
      //   // this.setData({
      //   //   selected: key
      //   // });
      //   console.log(this.data.selected);

      //   wx.switchTab({
      //     url: `/${tabList[key].pagePath}`,
      //   })
      // }
    },
  }
})
