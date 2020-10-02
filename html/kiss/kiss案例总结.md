# kiss案例总结

## 一、案例构思

1. 利用盒模型来构建元素框架（包括容器和细节元素等）

	2. 利用position实现元素布局
 	3. 利用伪类构造元素

  		4. 利用CSS3新特性：transform、animation、opacity等实现行为动作

## 二、细节知识点

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

      

 3. 让块级元素并列的方式

    - ```display: inline-block;```
    - ``float``

 4. 只有当伪类是块级元素时才可以显示在dom上，否则要用定位

 5. 实现同一元素公共样式的封装，个性样式的添加

    - 给同一个元素添加多个类名（后面类的CSS要写在前面类的下面），当代码从上往下解析时可以实现覆盖，达到不同的效果

 6. 隐藏元素

    - ``opacity``

    - ```display: none;```

## 三、对transform中rotate的理解

 	1. 坐标轴
     - 假设X轴和Y轴组成一个平面，那么Z轴如下所示：
     - 所取的deg正值为顺时针，反之逆时针，但**rotate()、rotateZ()**，会采用**就近转到目标角度**原则：
       -  小于180°，正常顺时针，但大于180°就要注意：例设值200deg，会逆时针转160度完事；
       -  设180°会逆时针转，-180°才顺时针；
       -  设360°的倍数值不转

![kiss](E:\study\StudyProjects\lq_fullstack\html\kiss\kiss.JPG)

## 四、开发经验

1. 细微元素会产生像素大小

   - 换行符占用1px

     - 即使在一个盒子（container）里被分配相同像素大小的两个div盒子（ball）如果刚好占满也不能在同一行排列（除非写在同一行）

     - height：container232px,两个ball116px加起来刚好够232px

     - 如果两个ball分行写，则换行符占用1px，两个ball无法并列

       ```html
       <div class="container">
       
           <div class="ball" id="l-ball">
             <div class="face" id="face-l">
               <div class="eye eye-l"></div>
               <div class="eye eye-r"></div>
               <div class="mouth"></div>
             </div>      
           </div><div class="ball" id="r-ball">
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

     - 解决方法：

       - 将container的字体大小设为0
       - ``font-size: 0``
       - 设置完成后可以分行写，保持代码整洁

2. 