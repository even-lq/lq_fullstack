// 闭包
// function A() {
//   let a = 1
//   window.B = function () {
//     console.log(a);
//   }
// }
// A() // 不执行B，未调用
// B() // 1


for (var i = 0; i <= 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);  //6
    }, j * 1000);
  })(i)
}
// 当for循环的循环次数增多时，for循环也需要耗时，那为什么for循环不是异步函数？
// 因为 for 循环的每一次循环的执行是不耗时的 

// 为什么打印6个6
// 因为 i是用var来定义的，由于for不存在块级作用域，所以变量i被提升到顶部，所以i是共用的

// 解决方式：
// 1. let
// 2. 闭包:
// (function (j) {
//   setTimeout(() => {
//     console.log(j);  //6
//   }, j * 1000);
// })(i)
