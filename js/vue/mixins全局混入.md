Vue.mixin全局混入

```js
Vue.mixin({
  beforeUpdate () {
    console.log('数据发生变化!')
  }
})
在所有发生数据更改的地方生效
```



mixins局部混入

代码具有复用性

