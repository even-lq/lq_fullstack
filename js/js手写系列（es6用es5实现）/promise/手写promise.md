## 手写promise

### then得知返回的是resolve还是reject：

设置公共变量，当resolve或reject时改变公共变量，then去获取该变量

```js
const PENDING = 'pending' // 初始状态
const RESOLVED = 'resolved'
const REJECTED = 'rejeccted'
```

### promise的链式调用

1. 需要回调数组

   ```js
   self.resolvedCallbacks = [] // then回调
   self.rejectedCallbacks = [] // catch回调
   ```

2. 第一个then需要promise的resolve才能执行，但是其后的then可以不用，但不会确保同步的顺序

   ```js
   // then链式调用
   if (self.state === RESOLVED) {
       onFulfilled(that.value)
   }
   ```

   

### promise的状态不可逆：then和catch不可同时生效

```js
function resolve(value) {
  if (self.state === PENDING) {
    self.state = RESOLVED
  }
}
```

### resolve或reject导致了then或catch的回调生效

```js
function resolve(value) {
  if (self.state === PENDING) {
    self.state = RESOLVED
    self.value = value
    self.resolvedCallbacks.map(cb => {
      cb(self.value)
    })
  }
}
```

### then的第二个参数就是catch

```js
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}
}
```

### then的参数要不就是函数，要不就会直接执行该参数（a().then(b)）

```js
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    // 传入一个变量，则传给自定义的箭头函数并执行
}
```

### 为什么new先执行，then后执行还可以push得了resolve的回调？

因为new里面的回调是异步的，而thenpush的回调是同步的

所以因为异步的关系，其实then会先执行，new后执行