# vue3

## 安装

```js
vue create vue3-initial // 选择vue3 preview版
```

## 为什么要用vue3

1. 随着项目复杂度的提升，组件逻辑分散在各个地方，难以维护

2. Mixin的缺点

   - 命名冲突
   - 不清楚暴露出来变量的作用

3. 响应式

   vue2不能使data中某个对象的新增属性变成响应式（Object.defineProperty）的，vue3可以（proxy）

4. 全局api
   - 在单元测试中，全局配置非常容易污染全局环境
   - 在不同的apps中，共享一份有不同配置的Vue对象变得非常困难
   - vue3：
     - 在Vue全局对象上修改的配置变为在某个vue实例上修改配置
     - 支持treeshaking，减少export default的导出，将具名的函数、对象等导出使得打包工具在打包时，不会打包没用到的函数、对象等。

## 与vue2的区别

1. js

   由options API 转变为 composition API

   代码尽可能的JS化，用vue的写法去迎合JS的写法，降低了学习vue的成本

   - 按需引用（引用composition API）

     >  vue3很接近`tree shaking`，用不到的api打包后不会出现（也就是不import引入的api在打包后不会出现，如：`import { reactive, computed } from 'vue'`）
     >
     > 在vue2中，new Vue后导致该实例天生具备data，methods，computed和watch，如果有些组件不需要这么多，打包后还是会出现，造成冗余。

     - 响应式

       由于允许类型定义，所以不再自动提供响应式，而提供`reactive` API

       reactive就是vue2的observe，可以将引用类型变为响应式的

       ```js
       import { reactive } from 'vue'
       const state = reactive({
           count: 1
       })
       ```

       使用：

       1. reactive无法操作原始类型，需要以对象的形式传参

          使用ref对原始数据类型进行响应式

          ```js
          import { reactive, computed, ref } from 'vue'
          let num = ref(2)
          num.value += 10
          ```

     - computed

       ```js
       import { reactive, computed } from 'vue'
       const double = computed(() => state.count * 2)
       ```

     - toRefs变量代理
     
       代理对象，直接引用属性
     
       ```html
       <input
              type="text"
              v-model="newTodo"
              @keyup.enter="addTodo"
       />
       ```
     
       ```js
       const state = reactive({
           newTodo: "",
           todos: [],
       });
       return {
           // 解构state，并且依然是响应式的，上面的双向绑定可以将state.newTodo写出newTodo
           ...toRefs(state),
       }
       ```
     
       注意：
     
       - 如果不同的对象有相同的key名，则在参数列表中，写在前面的生效
     
         ```html
         <input
                type="text"
                v-model="newTodo"
                @keyup.enter="addTodo"
         />
         ```
     
         ```js
         const state = reactive({
             newTodo: "fd",
             todos: [],
         });
         const abc = reactive({
             newTodo: "fd",
         });
         function addTodo() {
             console.log(abc.newTodo);
             console.log(state.newTodo);
         }
         return {
             // 当input输入并敲击回车时，state.newTodo有值
             // 打印：fd 输入inpu的值
             // 如果这样写：...toRefs(abc, state), 
             // 当input输入并敲击回车时，abc.newTodo有值
             // 打印：输入inpu的值 fd
             ...toRefs(state, abc), 
             addTodo,
         };
         ```
     
     - watch
     
       监听响应式对象
     
       ```js
       watch( [greetings, data], (newValue, oldValue) = {
       console.log( 'old', oldValue)
       console.log( 'new', newValue) 
       document.title = 'updated' + greetings.value + data.count
       })
       ```
     
       监听响应式对象的属性
     
       ```js
       watch( [greetings, () => data.count], ...)
       ```
   
2. main.js

   ```js
   // vue3 函数式编程
   import { createApp } from 'vue'
   import App from './App.vue'
   
   createApp(App).mount('#app')
   // vue2
   import Vue from 'vue
   import App from './App.vue'
   new Vue({
    render: h => h(App)
   }).$mount(' #app 1)
   ```

3. html

   - template标签

     vue3之后可以不在template下用一个容器包裹子标签，容许同级标签

4. 生命周期

   - 名称变更
   - 生命周期函数需要接受回调函数

5. 高阶函数

   将外部函数作为功能模块传到setup内部调用 => 作为hook函数使用

   ```js
   export default {
     // 入口
     setup() {
       const { state, double } = useCounter(1)
       function add() {
         state.count++;
       }
       return {
         state,
         double,
         add
       }
     }
   }
   
   function useCounter(count) {
     const state = reactive({
       count
     })
   
     const double = computed(() => state.count * 2)
   
     return {
       state,
       double
     }
   
   }
   ```

   注意：

   - 响应式问题

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

     das 

6. 新增的组件

   - fragment

     fragment父组件可以省去子组件内部template下无意义的根组件

   - quick

     递归渲染组件自身

   - teleport

     渲染vue组件内容到指定的dom结点上

     ```html
     <!-- index.html -->
     <div id="foot-container"></div>
     
     <!-- Teleport.vue -->
     <teleport to='#foot-container'>
         <div v-if="isOpen">
             <p>的撒大苏打实打实</p>
             <button @click="isOpen = false">取消</button>
         </div>
     </teleport>
     ```

   - suspense

     实现异步组件

     异步组件：组件的生效取决于`setup`函数是否生效

     ```js
     // Loading.vue
     import { onUnmounted, ref } from 'vue';
     export default {
       setup() {
         let loading = ref('')
         let i = 0;
         let arr = ['.', '..', '...', '..']
         let timer = setInterval(() => {
           loading.value = arr[i];
           i = (i + 1) % 4
         }, 350);
     
         onUnmounted(() => {
           clearInterval(timer)
         })
         return {loading}
       }
     }
     
     // App.vue
     <Suspense>
         <template #default>
           <AsyncComponent :timeout="3000" />
         </template>
         <template #fallback>
           <Loading />
         </template>
     </Suspense>
     ```

## Demo练习

### todolist

安装

```js
npm i todomvc-app-css
```

## 存在的问题

### toRefs

- 如果不同的对象有相同的key名，则在参数列表中，写在前面的生效

  ```html
  <input
         type="text"
         v-model="newTodo"
         @keyup.enter="addTodo"
  />
  ```

  ```js
  const state = reactive({
      newTodo: "fd",
      todos: [],
  });
  const abc = reactive({
      newTodo: "fd",
  });
  function addTodo() {
      console.log(abc.newTodo);
      console.log(state.newTodo);
  }
  return {
      // 当input输入并敲击回车时，state.newTodo有值
      // 打印：fd 输入inpu的值
      // 如果这样写：...toRefs(abc, state), 
      // 当input输入并敲击回车时，abc.newTodo有值
      // 打印：输入inpu的值 fd
      ...toRefs(state, abc), 
      addTodo,
  };
  ```

  
