## rate星级评分案例总结

### 一、案例构思

- 利用**单选框+伪类**实现样式

### 二、知识点

1. 清除元素的样式的三个属性

   ```css
   {
       appearance: none;
       border: none;
       outline: none;
   }
   ```

2. flex布局

   ```css
   display: flex;  /*弹性容器，按比例继承宽高*/
   flex-flow: row-reverse; /*元素反向排列*/
   ```

3. 属性选择器

   - 基本使用

     ``input[name="rate"]``表示选中所有为name属性的选择器

   - 属性选择器+伪类

     ``input[name="rate"]::after``

   - 属性选择器+伪类+状态

     `` input[name="rate"]:checked::after``

   - 属性选择器+:hover

     ``input[name="rate"]:hover``

   - ~ （兄弟选择器）：查找某一个指定元素的 **<u>后面</u>** 的所有兄弟结点

     /* 兄弟选择器 选下面所有的兄弟*/

     :arrow_down_small:：选择所有已经被选择的名为rate的input框后面的所有名为rate的  		 input框的伪类兄弟

      ``  input[name="rate"]:checked ~ input[name="rate"]::after``

     

     