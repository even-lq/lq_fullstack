// miniprogram/pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify'; 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showNewGroupModal: false,
    groupName:''
  },
  showNewGroupModal() {
    this.setData({
      showNewGroupModal: true
    })
  },
  onClose() {
    this.setData({
      showNewGroupModal: false
    })
  },
  createGroup() {
    // 把输入框的值存到数据库中
    // 调用云函数
    const self = this // 绑定page作用域
    if (self.data.groupName === '') {
      Notify({
        message: '组名不能为空哦',
        duration: 1500,
        selector: '#notify-selector',
        background: '#dc3545'
      });
      self.setData({
        showNewGroupModal: true
      })
      return 
    }
    wx.cloud.callFunction({
      name: 'createGroup', // 要调用的云函数名称
      data: {
        groupName: self.data.groupName
      },
      success(res) {
        self.setData({
          groupName: ''
        })
        Notify({
          message: '新建群组成功',
          duration: 1500,
          selector: '#notify-selector',
          background: '#28a745'
        });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/group/group'
          })
        }, 1500)
      },
      // callback风格也可以
      // success: res => {
      //   console.log(res);
      // }
      fail(err) {
        console.log('错误', err);
      }
    })
    
  },
  onGroupNameChange(event) {
    // 获取输入框的值
    this.setData({
      groupName: event.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})