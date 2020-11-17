### flip

flip不是动画的意思，而是前人总结出来的一种做动画的套路

#### 知识点

1. `.insertBefore(a, b)`：点前面：函数调用者；a：插入的元素; b：插入到该元素之前

2. 水平居中自适应

   ```js
   body {
       max-width: 500px;
       margin: auto;
   }
   ```

3. 固定flex布局下子元素宽度新办法

   父元素：

   ```js
   .wrap {
       display: flex;
       flex-wrap: wrap;
       column-count: 4;
   }
   ```

   子元素：(border-box)

   ```js
   .img-wrap {
       width: 25%;
       padding: 8px;
       box-sizing: border-box;
   }
   ```

4. 类数组转数组`Array.from()`