console.log('start');
setTimeout(function () {
  console.log('setTimeout');
}, 0)
new Promise(resolve => {
  console.log('Promise');
  resolve()
}).then(function () {
  console.log('promise1');
}).then(function () {
  console.log('promise2');
})
console.log('end');

// 浏览器下打印：start、promise、end、promise1、promise2、setTimeout
