# my-vuex(vuex原理)

## 核心原理

1. vuex是对象

   - 具有install和store(对象)两个属性
   - store的数据都是响应式的

2. this.$store = Vuex.Store实例.state

   其余属性同理

3. store属性的响应式

   ```js
   class Store {
     constructor (options) {
       this.state = options.state || {}
       this.vm = new Vue({
         data: {
           state: options.state
         }
       })
     }
   }
   ```

   调用时需要{{this.$store.vm.state.num}}

   用get操作符(属性自动触发器)省略vm

   ```js
   get state() {
       return this.vm.state
   }
   ```

   调用时变为{{this.$store.state.num}}

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
