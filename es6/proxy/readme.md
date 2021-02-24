## proxy

### 优点

1. `proxy`对比`Object.defineProperty()`，proxy可以操作任何数据结构，后者只能操作对象
2. 除了get，set可以定义更多行为，比如in，delete等11种操作

### 基本认识

`let proxy = new Proxy(target, handler)`

target：要拦截的目标对象

handler：一个用来订制拦截行为的对象

```js
let proxy = new Proxy({}, {
  get(obj, prop) {
      // obj对象，prop属性
  },
  set: function(obj, prop, value) {
	// value属性值
  }
})
```



proxy 是加工后的target