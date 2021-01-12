## flex

1. flex布局下的固定大小，不会随着父容器的宽度而改变

   ```css
   flex 0 0 64px
   flex-grow: 0 不分配剩余空间
   flex-shrink: 0 当父元素宽度不够用时，不收缩
   flex-basis: 64px 指定了flex元素在主轴方向上的初始大小
   ```

2. flex布局下的元素，无论盒子的级别，设置的宽度都生效

   ```css
   .title
       display flex
       align-items center
       margin-bottom 8px
       .brand
           width 30px
           height 18px  
   ```

3. 防止flex布局出现挤压或塌陷的现象

   flex-basis = width

   ```css
   flex 0 0 10px
   width 10px
   ```

   

