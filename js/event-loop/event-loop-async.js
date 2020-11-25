async function async1() {
  console.log('async1 start');
  await async2();
  // console.log('async1 end'); // 微任务队列
}
async function async2() {
  console.log('async2 start');
  return new Promise((resolve, reject) => {
    resolve();
    console.log('async2 promise');
  })
}
console.log('script start');
setTimeout(function () {
  console.log('setTimeout'); // 宏任务队列
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () { // 微任务队列
  console.log('promise2');
}).then(function () {// 微任务队列
  console.log('promise3');
});
console.log('script end');
/*
  执行顺序:
    1. 同步代码
    2. 微任务
    3. 宏任务中的异步代码

    同步代码:
      script start
      async1 start
      async2 start async遇到await立即执行
      async2 promise
      promise1
      script end
    微任务:
      promise2
      promise3
    宏任务的异步代码:
      setTimeout
*/