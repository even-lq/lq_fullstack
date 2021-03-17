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
        // "pagePath": "pages/order/order",
        "pagePath": "pages/map/map",
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

      if (key === 1) {
         this.setData({
          selected: key
        });
      } else {
        wx.switchTab({
          url: `/${tabList[key].pagePath}`,
          success: (res) => {
            console.log(res);
            let page = getCurrentPages()
            console.log(page);
          },
        })
      }



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
