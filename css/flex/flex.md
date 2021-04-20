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

## flex参数和计算

作者：Lovi
链接：https://juejin.cn/post/6951592511928270885
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

#### flex子元素伸缩属性

- 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大
- 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
- 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, **默认值为 auto, 即项目本身的大小**

1. 扩大

   当`空间充足`时，`flex子项`的宽度计算公式是： `自身的基础宽度 + 容器剩余宽度 *（自身伸张比例 / 所有子项伸张比例之和`），要注意两种缩写

   1. flex:none是flex: 0 0 auto的缩写
   2. flex:num 是flex:numb 1 0%的缩写。如flex：1 => flex: 1 1 0%。
   3. 不写flex的默认情况是flex: 0 1 auto

   ```html
   <style>
       .item {
       display: flex;
       width: 500px;
       height: 100px;
     }
     .item0 {
       width: 50px;
       flex: none;
       background-color: red;
     }
     .item1 {
       flex: 1 1 50px;
       background-color: green;
     }
     .item2 {
       flex: 7 1 100px;
       background-color: blue;
     }
       </style>
       <body>
       <div class="item">
           <div class="item0">0</div>
           <div class="item1">1</div>
           <div class="item2">2</div>
       </div>
   </body>
   ```

   剩余宽度 ： 500 - 50 - 50 - 100 = 300

   item0宽度： 50 + 300*（ 0 / (0+1+7）) = 50

1. 缩小

   ```html
    <style>
      .item00 {
       display: flex;
       width:300px;
       height: 100px;
     }
   
    .item0 {
       width:300px;
       background-color: red;
     }
     .item1 {
       flex: 1 1 100px;
       background-color: green;
     }
     .item2 {
       flex: 2 2 200px;
       background-color: blue;
     }
    </style>
   ```

   > 当`空间充足不足`时，`flex子项`的宽度计算公式是： `自身的基础宽度 - 超出宽度 *(自身宽度*收缩比例/总权重）`
   >
   > 超出宽度=300+100+200-300=300
   >
   > 总权重=300 * 1+100* 1+200*2=800   //理解一下总权重如何得出
   >
   > item0的宽度=300 -  300 * 300*1/800 =300 - 112.5=187.5；(只有width属性时，flex的属性值是0 1 auto,空间不足时也会收缩)

3. 若flex的第三个参数设置为auto，则只有设置了width，公式才生效

   ![flex-auto1](E:\study\StudyProjects\lq_fullstack\css\flex\flex-auto1.png)

   ![flex-auto2](E:\study\StudyProjects\lq_fullstack\css\flex\flex-auto2.png)

#### flex三参数

1. 默认值

   flex: 0 1 auto;