// console.log(1);
// function foo() {
//   return new Promise((resolve) => {
//     console.log(2);
//     resolve()
//   })
// }
// console.log(3);

// // foo也是同步函数，then才是异步函数，return Promise不影响promise里面的
// // 同步代码的执行，then执行resolve的操作才是异步代码
// foo().then(() => {
//   console.log(4);
// })
// console.log(5);
// // 1 3 2 5 4


console.log(1);
async function bar() {
  // await相当于promise中的then
  await fn() // async 碰到 await立即执行
  // await 导致后面的代码全部去到微任务队列
  console.log(6);
}
function fn() {
  console.log(7);
}
function foo() {
  return new Promise((resolve) => {
    console.log(2);
    resolve()
  })
}
bar()
console.log(3);

// foo也是同步函数，then才是异步函数，return Promise不影响promise里面的
// 同步代码的执行，then执行resolve的操作才是异步代码
foo().then(() => {
  console.log(4); // then去到微任务队列
})
console.log(5);
// 1 3 2 5 4