// var的缺陷？为什么要引入let const
function foo() {
  // var导致变量i提升值foo顶部，for循环结束，i
  // 本应该被销毁，但由于var的变量声明提升，i未被销毁
  for (var i = 0; i < 7; i++) {
  }
  console.log(i);// 还能打印7
}
foo()


// 作用域
// 变量和函数的可访问范围