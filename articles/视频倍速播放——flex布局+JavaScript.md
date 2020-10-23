## 视频倍速播放——flex布局+JavaScript

> 本案例为课上学习成果，该文章仅作为学习总结记录，欢迎学习交流。

### 一、展示![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d1750edaea445feb1c84ab5a0acc51a~tplv-k3u1fbpfcp-zoom-1.image)
### 二、构思
1. video标签
2. JavaScript调整video的倍速播放
### 三、实现
1. video美化：flex布局
2. 增加滑块元素：flex布局
3. 拖动滑块实现video的倍速播放：JavaScript
   - 获取滑块的wrapper元素：下文的``.speed``选择器
   - 获取滑块元素：下文的``.speed-bar``选择器
   - 鼠标移动到的坐标（y）距离**滑块wrapper**的高度即为**滑块**的高度：下文的``percent``变量（``height``转化`percent`为百分比）
   - 当滑块高度发生变化时，视频的倍速跟着变化:
   
     ### **核心逻辑：var playbackRate = percent * (max - min) + min**  &nbsp;&nbsp; ——> 让计算出来的高度（小数）在指定的播放倍速区间内[0.4 ， 4]
     
     - (max - min)：倍速的增量，设定最小播放倍速为**0.4**，最大为**4**。
     
     - percent * (max - min)：高度（小数）的范围在**[0 ，3.6]**之间
     
     - percent * (max - min) + min：高度（小数）的范围加上最小值0.4后，可以取到高度（小数）的范围在**[0.4 ， 4]**之间
 4. 代码
 	- html部分
      ```html
      <div class="wrapper">
          <video width="765" height="430" src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" controls class="flex"</video>
      <div class="speed">
        <div class="speed-bar">1x</div>
      </div>
      </div>
	```
    - css部分(flex)
      ```css
      * {
          margin: 0;
          padding: 0;
        }
        body {
          background:#4c4c4c url('https://unsplash.it/1500/900?image=1021');
          /*覆盖整个容器*/
          background-size: cover;
          /* 最小高度：100视口 */
          min-height: 100vh;
          display: flex;
          justify-content: center;/* 沿主轴对齐（水平） */
          align-items: center;/* 沿交叉轴对其（垂直） */
        }
        .wrapper {
          /*居中的第一种写法*/
          /* position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); */
          width: 850px;
          display: flex;
        }
        /* .flex {
          设置在父容器设置了弹性布局后，子容器占父容器宽度多少比例，1为1份
          flex: 1;
        } */
        .speed {
          background-color: #ffffff;
          /* 父容器设置了display: flex;当子容器设置flex: 1;时，子容器会均匀的继承父容器的高度 */
          flex: 1;
          /*父容器已定宽度，子容器设置外边距消耗父容器宽度，所以标签变小*/
          margin: 10px;
          border-radius: 50px;
          /* text-align: center; */
          display: flex;
          align-items: flex-start;
          overflow: hidden;
        }
        .speed-bar {
          /* width: 100%; */  /*width:100%;和flex: 1;可以互换*/
          flex: 1;
          height: 16.3%;
          display: flex;
          justify-content: center;
          align-items: center;
          /*线性渐变: 从-170deg的位置，由0%高度的#2376ae变化到100%高度的#c16ecf*/
          /*角度从0开始，从第三个参数的颜色变化到第二个参数的颜色，正值顺时针，负值逆时针*/
          background: linear-gradient(-170deg, #2376ae 0%, #c16ecf 100%);
          color: #fff;
          cursor: pointer;
        }
		```
      
    - JavaScript部分
      ```javascript
      /*  1.拿到要操作的dom结构
      2.在这个dom上移动鼠标能控制滑块的位置
      3.能控制这个dom的高度发生变化
      4.根据该dom高度的值来调整视频的播放速度
      */

      var speed = document.querySelector('.speed')
      var bar = document.querySelector('.speed-bar')
      var video = document.querySelector('.flex')

      /* 注册事件 */
      speed.addEventListener('mousemove', function(event) {
        // console.log(event);
        var y = event.pageY - speed.offsetTop
        var percent = y / speed.offsetHeight // 获取该dom结构自身的高度
        var min = 0.4
        var max = 4
        var height = Math.round(percent * 100) + '%'
        var playbackRate = percent * (max - min) + min /*使得式子出现在0.4至4之间*/
        // console.log(percent + '+' + playbackRate);
        bar.style.height = height
        /*playbackRate播放速度 */
        video.playbackRate = playbackRate
        bar.textContent = playbackRate.toFixed(2) + 'x'

      })
      ```
### 四、总结
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