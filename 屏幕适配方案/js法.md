### js+rem

src/config/rem.js

```js
// 读取用户设备宽度，并设置项目的根字体大小
(function(doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 375) + 'px'
    }
  // document天生具备监听事件
  if (!doc.addEventListener) return;
  // 监听屏幕发送变化
  win.addEventListener(resizeEvt, recalc, false)
  // 监听dom结构加载完成
  win.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
```

`import './config/rem'`