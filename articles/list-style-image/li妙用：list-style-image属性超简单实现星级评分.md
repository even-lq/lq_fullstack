### \<li>新玩法：list-style-image属性超简单实现星级评分

CSS自CSS3以来，被拆分为多个模块进行更新。今天在查阅文档[CSS Lists Module Level 3](https://www.w3.org/TR/?title=css%20lists%20module%20level%203&tag=css&version=latest)的时候找到li标签的冷门属性``list-style-image``，它可以设置列表开头的标记为图片

```css
li { list-style-image: url("http://www.example.com/ellipse.png") }
```

![item_star](D:\Desktop\list-style-image\item_star.png)

笔者联想或许可以实现星级评分，下面是实践过程：

![star](D:\Desktop\list-style-image\star.gif)

达到的效果：

> 1. 鼠标点击或移动到星星上，该星星及其之前的星星会变成选中状态（金色），而该星星及其之后的星星则是未选中的状态（空星）。
> 2. 任意改变星级（可以不按顺序地改变星级，也就是任意改变着色星星的数量）

#### 1. html

```html
<ul id="ul">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

#### 2. css

```css
 ul {
     display: flex;
     margin-left: 500px;
}

ul li {
    height: 36px;
    width: 36px;
    cursor: pointer;
    list-style-position: inside;
    list-style-image: url("./star.png")
}
```

1. li父元素ul实现flex布局使得子元素由纵向排列变成横向排列

   ![no-flex](D:\Desktop\list-style-image\no-flex.png)![flex](D:\Desktop\list-style-image\flex.png)

2. 由于两张图片（空星和金星）大小不同，需要统一

3. 核心样式：

   ```css
   list-style-position: inside;
   list-style-image: url("./star.png")
   ```

   list-style-position: **使得listy-style-image占据文本位置**

   > ```css
   > inside
   > ```
   >
   > 标记盒是主要块盒中的第一个行内盒，处于元素的内容流之后
   >
   > ![list-position](D:\Desktop\list-style-image\list-position.png)

   如不设置则会：

![li-no-inside](D:\Desktop\list-style-image\li-no-inside.png)

​		li的标记盒始终位于li**之前**

​		list-style-image: 设置li的标记元素为图片

​		笔者在实现鼠标移动事件的过程中，最初的考虑是不使用js，而用``:hover``伪类实现，但是实现了鼠标事件后发现``:hover``失效了，所以改用``onmouseover``事件来实现

```css
ul li:hover {
    height: 36px;
    width: 36px;
    list-style-image: url("./goldStar.png")
} 

ul li:hover~li {
    height: 36px;
    width: 36px;
    list-style-image: url("./goldStar.png")
}
```



#### 3. js

```js
let ul = document.getElementById('ul').children // 获取所有li
let length = ul.length // li总数
// 图片转换常量
let lsi = "list-style-image"
let goldStarUrl = `url("./goldStar.png")`
let starUrl = `url("./star.png")`

for (let i in ul) {
    ul[i].onclick = function () {
        rate(ul, i, starUrl, goldStarUrl)
    }

    ul[i].onmouseover = function () {
        rate(ul, i, starUrl, goldStarUrl)
    }
}
// list-style-image地址转换操作
function selectStar(ele, star) { ele.style[lsi] = star }
// 完成星级评分操作
function rate(ul, i, star, gstar) {
    for (let index = Number.parseInt(i); index >= 0; index--) {
        selectStar(ul[index], gstar)
    }
    for (let j = Number.parseInt(i) + 1; j < length; j++) {
        selectStar(ul[j], star)
    }
}
```

1. 获取所有li
2. 遍历所有li并给他们添加**点击**事件和**鼠标移动**事件
3. 发生操作时（点击、鼠标移动）：改变元素（星星）及元素之前（选中）和元素之后（不选中）的样式

#### 4. 发现

![marker](D:\Desktop\list-style-image\marker.png)

笔者检查元素时发现每个li会自带一个**::marker**伪类

![star-marker](D:\Desktop\list-style-image\star-marker.png)

注释后发现其实它恰恰就是li的**标记盒**，也就是我们熟悉的小圆点

![li-marker](D:\Desktop\list-style-image\li-marker.png)

它扩展了li标记盒的展示空间，可以给li标记盒添加更多的样式

> ```css
> ul li::marker {
>   color: red;
>   font-size: 1.5em;
> }
> ```
>
> ![result](D:\Desktop\list-style-image\result.png)

或许可以实现更多好玩的样式，详情请参照MDN文档[::marker](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::marker)

如果觉得不错的话可以点个赞哟~如有错误欢迎指正，欢迎交流。