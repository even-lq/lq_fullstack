// 使得异步代码更像同步代码
function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('你好');
      resolve()
    }, ms);
  })
}

// async 声明函数内部可能存在异步的情况
async function asyncPrint(value, ms) {
  await timeout(ms) // 阻塞后面的代码
  console.log(value); // 去到微任务队列
}
// async 遇到 await会立即执行
asyncPrint('value', 1000)
console.log('ok'); // 同步代码先执行
