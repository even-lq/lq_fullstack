// 在规定的时间内只触发一次
// function throttle(fn, delay) {
//   // 记录时间戳
//   // 闭包让prev的作用域链不释放
//   let prev = Date.now()
  
//   return function () {
//     let now = Date.now()
//     let arg = arguments
//     let context = this
//     // console.log(context); // button的dom结点
//     if (now - prev >= delay) {
//       fn.apply(context, arg)
//       // fn(arg)  
//       prev = Date.now()
//     }
//   }
//   // 时间戳不会重复
// }