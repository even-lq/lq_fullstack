## video案例总结（flex+JavaScript）

### 一、构思

1. video标签
2. JavaScript调整video的倍速播放

### 二、具体逻辑

1. video美化：flex布局
2. 增加滑块元素：flex布局
3. 拖动滑块实现video的倍速播放：JavaScript
   - 获取滑块的wrapper元素
   - 获取滑块元素
   - 鼠标移动到的坐标（y）距离**滑块wrapper**的高度即为**滑块**的高度
   - 当滑块高度发生变化时，视频的倍速跟着变化
   - **核心逻辑：var playbackRate = percent * (max - min) + min**

### 三、知识点

1. CSS部分

   - 元素水平垂直居中（给父元素添加flex布局）

     ```css
     body {
       /* 最小高度：100视口 */
       min-height: 100vh;
       display: flex;
       justify-content: center;/* 沿主轴对齐（水平） */
       align-items: center;/* 沿交叉轴对其（垂直） */
     }
     ```

   - 父容器设置``display: flex;``子容器可以设置``flex: 1;``flex所取的数字表示按**多少**比例均等分父容器的**宽度**，例如1表示元素平分父容器宽度

     ```css
     /* 父容器 */
     .wrapper {
       width: 850px;
       display: flex;
     }
     
     /* 子容器 */
      .flex {
       flex: 1;
     } 
     ```

   - ``align-items: flex-start;``表示子元素垂直对齐方式为沿交叉轴顶部对齐

   - 当父容器设置``display: flex;``而子容器只有一个元素时，可以设置``flex: 1;``或``width: 100%;``来占据父容器的所有宽度

   - 渐变色的用法：``linear-gradient``

     ```css
     /*线性渐变: 从-170deg的位置，由0%高度的#2376ae变化到100%高度的#c16ecf*/
     
     /*角度从0开始，从第三个参数的颜色变化到第二个参数的颜色，正值顺时针，负值逆时针*/
     background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
     ```

     

2. JavaScript部分
   - ``document.querySelector('类选择器')``：获取dom中的指定类选择器的标签
   - ``addEventListener(‘事件’, 方法(事件参数))``：为指定标签变量添加事件监听方法，监听事件，当事件发生时在方法中作对应操作
   - ``pageY``：指定事件中元素的y轴坐标
   - ``offsetTop``：元素距离网页顶部的距离
   - ``offsetHeight``：元素自身的高度
   - ``元素.style.height``：设置元素样式的高度
   - ``playbackRate``：video标签中控制倍速播放的属性
   - ``textContent``：获取标签的内容

