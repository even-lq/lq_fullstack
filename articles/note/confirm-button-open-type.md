### confirm-button-open-type

vant Dialog 弹出框的确认按钮确认按钮的微信开放能力

需要将 [Dialog](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) 组件 `confirm-button-open-type` 的值设置为 `getUserInfo`，当用户点击并同意之后，可以通过 `bindgetuserinfo` 事件回调获取到微信服务器返回的加密数据

```html
// wxml
<van-dialog
 show="{{ show }}"
 confirm-button-open-type="getUserInfo"
 bind:close="onClose"
 bind:getuserinfo="getUserInfo"
>
 <view class="message">代码是写出来给人看的，附带能在机器上运行</view>
</van-dialog>

// js
Page({
     data: {
     show: true
     },
     getUserInfo(event) {
     console.log(event.detail);
     },
     onClose() {
     this.setData({ close: false });
     }
});
```

