一、clientX、clientY
点击位置距离当前body可视区域的x，y坐标

二、pageX、pageY
对于整个页面来说，包括了被卷去的body部分的长度

三、screenX、screenY
点击位置距离当前电脑屏幕的x，y坐标

事件流（事件模型）： 捕获阶段 -> 目标阶段 -> 冒泡阶段
事件流的执行顺序是由以上三个阶段顺序执行，
如果事件绑定的参数是false(默认)，则事件只会在冒泡阶段执行
如果事件绑定的参数是true，则事件只会在捕获阶段执行
捕获阶段：由顶层一直逐级往下触发事件
冒泡：与捕获阶段相反，由底层一直逐级往上触发事件



currentTarget 与 target

currentTarget事件的绑定元素（在事件冒泡中可以体系）

target事件触发元素

```js
// 事件冒泡：只存在一个事件
const ul = document.querySelector('ul');
// ul.onclick = event => {
//   // event.target 事件目标
//   console.log('ul', event.target.textContent);
// }

ul.addEventListener('click', (event) => {
    console.log(event.currentTarget); 
    // event.target 事件目标
    console.log('ul', event.target.textContent);
})
```

event.currentTarget打印整个ul

event.target打印触发点击事件的那个li