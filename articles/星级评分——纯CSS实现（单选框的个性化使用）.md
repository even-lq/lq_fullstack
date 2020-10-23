## 星级评分——纯CSS实现（单选框的个性化使用）
> 本案例为课上学习成果，该文章仅作为学习总结记录，欢迎学习交流。

### 一、展示
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/299a18bf2d3c40a6b40472d77cb7362a~tplv-k3u1fbpfcp-zoom-1.image)
### 二、构思
1. 基本元素
	- input单选框 + 伪类
    - 空星+选中后的星 —> iconfont
2. 实现效果
	- 鼠标悬停效果
    - 点击效果
    - 以上两个效果发生时联动其前面的星星发生相同的效果
### 三、实现
1. html部分双层结构（rate-content+radio*5）
```html
<div class="rate-content">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <!-- 具有相同name的单选框只能选一个 -->
  </div>
```
2. css部分（input(radio)+::before&after+input(radio):checked+hover）
```css
/* 消除单选框默认样式 */
    input {
      appearance: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
    .rate-content {
      display: flex;  /*弹性容器，按比例继承宽高*/
      flex-flow: row-reverse; /*元素反向排列*/
      float:left;
      margin-top: 200px;
      margin-left: 200px;
    }
    /* 选中所有为name属性的选择器 */
    input[name="rate"] {
      font-family: "iconfont";
      font-size: 30px;
      padding-right: 10px;
      transition: all 0.4s ease; /*元素变化的过渡时间*/
    }
    input[name="rate"]::after {
      content:"\f2d3";
      color: #999;
    }
    input[name="rate"]:checked::after{
      content:"\e61a";
      color: #ffa822;
    }
    input[name="rate"]:hover{
      transform: scale(1.2);   /*缩放*/
    }
    input[name="rate"]:hover::after{
      content:"\e61a";
      color: #ffa822;
    }
    /* 兄弟选择器  选下面所有的兄弟*/
    input[name="rate"]:checked ~ input[name="rate"]::after {
      content:"\e61a";
      color: #ffa822;
    }
     input[name="rate"]:hover ~ input[name="rate"]::after {
      content:"\e61a";
      color: #ffa822;
    }
```
   ### 四、总结
   1. 清除元素的样式的三个属性

   ```css
   {
       appearance: none;
       border: none;
       outline: none;
   }
   ```

2. flex布局
   
   与兄弟选择器配合使用：兄弟选择器选择的是某元素后面的选择器，而 ``flex-flow: row-reverse``让其排列到前面达到所需效果
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
   
     - 达到缩放效果
     - 与选中效果一致

     ``input[name="rate"]:hover``

   - ~ （兄弟选择器）：查找某一个指定元素的 **<u>后面</u>** 的所有兄弟结点

     /* 兄弟选择器 选下面所有的兄弟*/

     ↓  选择所有已经被选中的名为rate的input框后面的所有名为rate的input框的伪类兄弟

      ``  input[name="rate"]:checked ~ input[name="rate"]::after``