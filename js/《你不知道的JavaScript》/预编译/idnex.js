// let name = 'lq'
function foo() {
  console.log(name);// 变量声明被提升到作用域顶部，var name,但是没有赋值
  var name = 'tt'
}
// console.log(name);
foo()