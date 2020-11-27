html标签：

- 块级
  - 元素独占一行
  - 能设置宽高
- 行内
  - 水平方向元素在一行上显示
  - 垂直方向与当前行的baseline（vertical-align）对齐
  - 行内非置换元素不能设置宽高（置换元素可以）

#### 置换元素

内容不受css控制

```html
<img src="" alt="">
<canvas></canvas>
<input />
<iframe src="" frameborder="0"></iframe>
<script src=""></script>
```

#### 非置换元素