# Vue3响应式原理

## 简单响应式探究

`vue3.0\vue3-resource\vue-next\packages\vue\dist\index.html`

响应式问题

返回响应式的对象`不能人为的解构`（要不就直接使用，要不就toRefs解构），需要使用`toRefs`进行解构，否则响应式失效

例如：

```js
<script>
    function usePosition() {
      let position = Vue.reactive({
        x: 0,
        y:0
      })
      function update(e) {
        position.x = e.pageX
        position.y = e.pageY
      }
      Vue.onMounted(() => {
        window.addEventListener('mousemove', update)
      })
      // 或者 
      // 1.
      // return Vue.toRefs(position)
      // 2.
      return position
    }
    const App = Vue.createApp({
      setup() {
        // 返回响应式的对象不能人为的解构（要不就直接使用，要不就toRefs解构），需要使用toRefs进行解构，否则响应式失效
        // 1. let { x, y } = usePosition()
        // 2.
        let position = usePosition()
        
        return {
          // 根据1.，已经完成响应式解构，可以直接返回x和y
          position // 根据2.，可以使用...Vue.toRefs(position)解构，这样下面就可以直接使用x和y，如不解构则直接position对象属性方式调用
        }

      },
      template: `<div>x:{{position.x}} y:{{position.y}}</div>`
    })

    App.mount(container)
  </script>
```

## 源码分析

1. 判断是否可读

   是 => 直接返回返回（不能使其变成可写的）

## vue2响应式

vue2.js

### 思路

观察者模式

1. 观察对象

   观察者模式观察数据源

2. 传参判断

   判断data数据源是否是对象

3. `Object.defineProperty`监听数据源的每个属性（包括嵌套的对象）

   嵌套对象 => 递归

   > 注意：在书写vue代码时注意不要把数据源嵌套得过深，因为内部需要递归”观察“，造成性能问题

4. 处理数组的观察

   `Object.defineProperty`如何拦截数组

   方法：重写数组方法

## vue3响应式

vue3.js

WeakSet

- 与`Set`相比，`WeakSet` 只能是**对象的集合**，而不能是任何类型的任意值。
- `WeakSet`持弱引用：集合中对象的引用为弱引用。 如果没有其他的对`WeakSet`中对象的引用，那么这些对象会被当成垃圾回收掉。 这也意味着WeakSet中没有存储当前对象的列表。 正因为这样，`WeakSet` 是不可枚举的。

