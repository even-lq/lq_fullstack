#### html书写方式的性能优化

1. css用单独的类名，减少类，标签的嵌套，保持扁平化 

   减少递归渲染，同理html不要嵌套没有意义的标签

   ```css
   span {
       color: red;
   }
   /* 浏览器会先找所有span，然后再找装在a标签里面的span，还要找被a标签包裹而且被div包裹的span，需要递归寻找*/
   div > a > span {
       color: red;
   }
   ```

2. script标签的位置不要太靠前，不然在读到script时会阻塞渲染

   也可以给script加上async属性，使其异步渲染，等html渲染完后下载

   `<script async src="./vue.js"></script>`

   还可以加上defer属性，使其并行渲染

   `<script defer src="./vue.js"></script>`

3. 减少dom操作

   为什么操作DOM性能很差?

   1. 操作dom会导致多线程并发

      浏览器存在渲染引擎和js引擎，当用js操作dom时(document.getElementById)，需要两个引擎之间通信，也就是多线程通信，多线程并发工作，造成性能开销大

   2. 可能引起重绘和回流

4. 减少回流

   - 控制元素的显示和隐藏的时候尽量不要用display: none

     改用visibility，opacity

   - 不要把结点的属性值放在一个循环里面当成循环的变量

     ```js
     for (let i = 0; i < 1000; i++) {
         console.log(document.querySelector('.test').style.offsetTop);
     }
     ```

   - 尽量不要使用table布局