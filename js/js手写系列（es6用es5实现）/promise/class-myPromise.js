const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  status = PENDING;
  value = null;
  reason = null;
  // 存储宏任务的异步代码
  onFulfilledCallback = [];
  onRejectedCallback = [];

  // 细节：要用箭头函数，否则要绑定this
  resolve = (value) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;

      // 处理所有then的回调值，执行一个就移出队列
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value);
      }
    }
  };

  reject = (reason) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;

      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      onRejected(this.reason);
    } else if (this.status === PENDING) {
      this.onFulfilledCallback.push(onFulfilled);
      this.onRejectedCallback.push(onRejected);
    }
  }
}



module.exports = MyPromise;
