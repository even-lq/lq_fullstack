## -webkit-tap-highlight-color用法

### 一、概述

1. 当用户点击iOS的Safari浏览器中的链接或JavaScript的可点击的元素时，覆盖显示的高亮颜色。
2. 是一个没有标准化的属性。
3. 只用于IOS(iPhone和iPad)

### 二、用法

```css
-webkit-tap-highlight-color:rgba(0,0,0,0) 
```

1. rgba设置颜色和透明度

2. 透明度（ragba最后一个数值）

   - 可以只设置透明度。如果未设置透明度，iOS Safari使用默认的透明度。

   - 当透明度设为0，则会禁用此属性；
   - 当透明度设为1，元素在点击时不可见。

3. 示例：

   设置点击时显示高亮为50%透明度的(241,54,68)颜色

   ```css
   -webkit-tap-highlight-color: rgba(241,54,68,0.5);
   ```

   