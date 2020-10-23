### cat-movie

1. vertical-align: middle;使行内元素互相对齐

2. &(代表父选择器):first-child：选择父元素的第一个子元素

3. 去除行内元素间距：父元素font-size：0

4. 文本对齐只有设置宽度才生效 
   - text-align：right；对齐图片
5. display: -webkit-box; 自适应不同设备的宽高

6. 开关变量控制开关，判断类名是否有这个类名也可以控制开关

7. flex：任意数值; 子元素对父元素分配的空间的占比

8. 设置background: url() 时，可能还需要设置  background-size: cover; 否则图片可能失效

9. box-sizing: border-box； mp操作挤压盒子宽高，一般用于控制文本在容器中的显示

10. // 将对象作为弹性伸缩盒子模型显示

       display -webkit-box

       // 在父元素上设置  子元素排列 vertical (垂直) or horizontal（水平） 

       -webkit-box-orient vertical

       // 块元素显示的文本的行数。

       -webkit-line-clamp 3

       // 控制长度超过一行的单词是否被拆分换行

       word-wrap break-word

       // 控制单词如何被拆分换行:所有单词碰到边界一律拆分换行

       word-break break-all

11.   overflow-x: scroll; x轴的元素超出宽度则滚动

      隐藏滚动条

      &::-webkit-scrollbar

    ​     width 0

    ​     height 0

    ​     background-color transparent



