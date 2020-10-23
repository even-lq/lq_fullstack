## kiss——简单CSS动画展示

> 本案例为课上学习成果，该文章仅作为学习总结记录，欢迎学习交流。

### 一、展示

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cfa047da252d4f1893ee6f259cfe0427~tplv-k3u1fbpfcp-zoom-1.image)

### 二、构思
1. 使用技术：html+css
2. div盒模型
3. position定位固定元素位置
4. 伪类制造元素（腮红部分）

### 三、实现
1. html部分三层结构（container+ball*2）
```html
<div class="container">
  
    <div class="ball" id="l-ball">
      <div class="face" id="face-l">
        <div class="eye eye-l"></div>
        <div class="eye eye-r"></div>
        <div class="mouth"></div>
      </div>      
    </div>
  
    <div class="ball" id="r-ball"><!-- 换行也算一像素，即使加起来刚好够也会超出232+1-->
      <div class="face face-r">
        <div class="eye eye-l eye-r-p"></div>
        <div class="eye eye-r eye-r-p"></div>
        <div class="mouth mouth-r"></div>
        <div class="kiss-m">
          <div class="kiss"></div>
          <div class="kiss"></div>
        </div>
      </div>
    </div>
  
</div>
```
2. css部分（positon+transform+::before&after+animation+opacity）
```css
body {
  margin: 0;
  padding: 0;
  background-color: #78e08f;
}
.container {
  width: 232px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 0;/* 重点 */
}
.ball {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* bdrs */
  border: 8px solid #000;
  background-color: #fff;
  position: relative;
  display: inline-block;
}
.face {
  width: 70px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 30px;
}
.face::before {
  content: "";
  width: 18px;
  height: 8px;
  border-radius: 50%;
  background-color: #badc58;
  position: absolute;/* 只有块级元素才能显示，否则用定位 */
  right: -8px;
  top: 20px;
}
.face::after {
  content: "";
  width: 18px;
  height: 8px;
  border-radius: 50%;
  background-color: #badc58;
  position: absolute;
  left: -5px;
  top: 20px;
}
.eye {
  width: 15px;
  height: 14px;
  border-radius: 50%;
  border-bottom: 5px solid #000;
  position: absolute;
}
.eye-l {
  left: 10px;
}
.eye-r {
  right: 5px;
}
.mouth {
  width: 30px;
  height: 14px;
  border-radius: 50%;
  border-bottom: 5px solid #000;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  margin: 0 auto;/*绝对定位中要l0r0才可以水平居中*/
  transform: translate(3px);
}
#l-ball {
  animation: close 4s ease infinite;
  z-index: 2;
}
@keyframes close {
  0% { transform: translate(0); }
  20% { transform: translate(20px); }
  35% { transform: translate(20px); }
  55% { transform: translate(0); }
  100% { transform: translate(0); }
}
#face-l {
  animation: face 4s ease infinite;
}
@keyframes face {
  0% { transform: translate(0) rotate(0); }
  10% { transform: translate(0) rotate(0); }
  20% { transform: translate(5px) rotateX(-2deg); }
  28% { transform: translate(0) rotate(0); }
  35% { transform: translate(5px) rotateX(-2deg); }
  50% { transform: translate(0) rotate(0); }
  100% { transform: translate(0) rotate(0); }
}
.face-r {  /*重置face*/
  /* 如果在这里宽度写200，这里生效，
  因为代码是从上往下执行的，200会覆盖face的100 */
  left: 0;
  top: 37px;
}
.face-r::before {  /*重置face*/
  width: 10px;
  height: 10px;
  right: -4px;
}
.face-r::after {  /*重置face*/
  width: 10px;
  height: 10px;
  left: 5px;
}
.eye-r-p {
  border-top: 5px solid #000;
  border-bottom: none;
}
.kiss-m {
  position: absolute;
  left: 20px;
  top: 22px;
  opacity: 0;
  animation: kiss-m 4s ease infinite;
}
.kiss {
  width: 13px;
  height: 10px;
  border-radius: 50%;
  border-left: 5px solid #000;
}
#r-ball {
  animation: kiss 4s ease infinite;
}
@keyframes kiss {
  40% { transform: translate(0); }
  50% { transform: translate(30px) rotateZ(20deg); }
  60% { transform: translate(-33px); }
  67% { transform: translate(-33px); }
  77% { transform: translate(0); }
}
.mouth-r {
  animation: mouth-m 4s ease infinite;
}
@keyframes mouth-m {
  0% { opacity: 1; }
  54.9% { opacity: 1; }
  55% { opacity: 0; }
  66% { opacity: 0; }
  66.1% { opacity: 1; }
}
@keyframes kiss-m {
  0% { opacity: 0; }
  55% { opacity: 0; }
  55.1% { opacity: 1; }
  66% { opacity: 1; }
  66.1% { opacity: 0; }
}
```

### 四、总结

  1. 清除dom默认样式

    ```css
    body {
      margin: 0;
      padding: 0;
    }
    ```
    
    body默认带有外边距，为保持完整性需要清除默认样式

 2. 元素居中的方式

    - 盒子垂直居中

      ```css
      .container {
        border: 1px solid #000;
        width: 232px;/* 给定宽高 */
        height: 150px;
          
        position: absolute;/* 定位距离上左50% */
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);/* translateX轴和Y轴调整归为 */
      }
      ```

    - 盒子内的元素垂直居中

      ```css
      .mouth {
        width: 30px;/* 给定宽高 */
        height: 14px;
          
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;/* 左右为0后分配自然的距离方可居中 */
        transform: translate(3px);
      }
      ```

    - 文本居中
    
      让height=line-height；text-align:center;
      
    - flex布局

 3. 让块级元素并列的方式

    - ```display: inline-block;```
    - ``float``

 4. 只有当伪类是块级元素时才可以显示在dom上，否则要用定位

 5. 实现同一元素公共样式的封装，个性样式的添加
    - ↑ 上面的重置face样式即为所作

    	- 给同一个元素添加多个类名（后面类的CSS要写在前面类的下面），当代码从上往下解析时可以实现覆盖，达到不同的效果
      

 6. 隐藏元素

    - ``opacity``
- ```display: none;```
    
7. 对transform中rotate的理解

   - 坐标轴

     假设X轴和Y轴组成一个平面，那么Z轴如下所示：

     > 此处引用csdn [rotate()旋转角度/顺逆时针问题](https://blog.csdn.net/Viry_Hu/article/details/81808085) 的解释：
     >
     > 所取的deg正值为顺时针，反之逆时针，但**rotate()、rotateZ()**，会采用**就近转到目标角度**原则：
     >    -  小于180°，正常顺时针，但大于180°就要注意：例设值200deg，会逆时针转160度完事；
     >    -  设180°会逆时针转，-180°才顺时针；
     >    -  设360°的倍数值不转

     ​        ![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c60da4162654ac3b37af387d19aa1e8~tplv-k3u1fbpfcp-zoom-1.image)