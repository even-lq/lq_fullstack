# 浮动
  1. 使元素脱离文档流，但元素中的文本不会脱离文档流 => 文字环绕
  2. 造成浮动元素的父元素的高度坍塌
# 解决父容器高度塌陷的问题
  1. 在最后一个浮动元素后面增加一个冗余元素clear:both
  2. 伪类：给浮动元素的父元素添加伪类

    - .clearfix::after {
        content: '';
        display: block;
        clear: both;
       }
    - before开标签之前
    - after闭标签之后 
  3. **bfc**（冷门知识：面试可能会问）

    - 给浮动的父元素添加overflow属性，值除了visible，其他都可以
    - 解决margin重叠的问题


