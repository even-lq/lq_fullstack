// 尽量不创建全局变量
// function doSomething(a) {
//   b = a + doSomethingElse(a * 2)
//   console.log(b * 3);
// }

// function doSomehingElse(c) {
//   return c - 1
// }
// var b;
// doSomething(2)

// // 优化：如果变量的词法作用域范围只有一个（在某个函数中），则尽量减少全局作用域的标识符
// function doSomething(a) {
//   function doSomethingElse(c) {
//     return c - 1
//   }
//   var b;
//   b = a + doSomethingElse(a * 2)
//   console.log(b * 3);
// }
// doSomething(2)


// 匿名函数：让函数和变量外面包裹一层自执行函数，实现函数和变量在全局作用域的隐藏
var a = 2;
(function() {
  var a = 3
  console.log(a);
})()
console.log(a);
