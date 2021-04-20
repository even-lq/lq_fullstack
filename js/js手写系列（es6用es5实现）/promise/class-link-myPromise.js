// 链式调用then
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  value = null;
  err = null;
  status = PENDING;

  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value);
      }
    }
  };
  reject = (err) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.err = err;

      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(err);
      }
    }
  };

  then(onFulfilled, onRejected) {
    // 细节：要用箭头函数，因为不让new里面的this失灵
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 细节：箭头函数
        // 防止在then里面返回自己（promise2）
        // 让其进入微任务队列，初始化promise2，再用promise2 与 返回的x 判断
        // 一致则说明调用了自身,返回错误
        queueMicrotask(() => {
          const x = onFulfilled(this.value);

          resolvePromise(promise2, x, resolve, reject);
        });
      } else if (this.status === REJECTED) {
        onRejected(this.err);
      } else if (this.status === PENDING) {
        onFulfilled && this.onFulfilledCallback.push(onFulfilled);
        onRejected && this.onRejectedCallback.push(onRejected);
      }
    });

    return promise2;
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x)
    return reject(
      new TypeError("Chaining cycle detected for promise #<Promise>")
    );
  if (x instanceof MyPromise) {
    x.then(resolve, reject);
  } else {
    resolve(x);
  }
}

module.exports = MyPromise;
