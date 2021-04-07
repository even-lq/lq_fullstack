const PENDING = 'pending' // 初始状态
const RESOLVED = 'resolved'
const REJECTED = 'rejeccted'

function MyPromise(fn) {
  const self = this
  self.state = PENDING
  self.value = null // resolved或reject值
  self.resolvedCallbacks = [] // then回调
  self.rejectedCallbacks = [] // catch回调

  // 在一个promise里面执行了resolve就不会执行reject
  function resolve(value) {
    if (self.state === PENDING) {
      self.state = RESOLVED
      self.value = value
      self.resolvedCallbacks.map(cb => {
        cb(self.value)
      })
    }
  }

  function reject(value) {
    if (self.state === PENDING) {
      self.state = REJECTED
      self.value = value
      self.rejectedCallbacks.map(cb => { // 异步执行，保证执行顺序；如果一开始的promise只写了resolve而没有写then，那么错过的then会在then函数里面拿到resolve的值然后执行
        cb(self.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }
}



MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v // 如果onFulfilled不是函数，则强行写成函数
  onRejected = typeof onRejected === 'function' ? onRejected : r => {throw r}

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }

  // then链式调用
  if (that.state === RESOLVED) {
    onFulfilled(that.value)
  }

  if (that.state === REJECTED) {
    onRejected(that.value)
  }
}





function a() {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('ok')
    }, 1000);
  })

}

// 即使不设置时间也是异步
function b() {
  setTimeout(() => {
    console.log('bbb');
  });
}

// a()
// b()

a().then(() => {
  b()
})
// a().then(b)