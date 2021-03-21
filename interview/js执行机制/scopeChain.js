//作用域链
function bar() {
  console.log(myName);
}
function foo() {
  var myName = '蜗牛'
  bar()
}
var myName = '周老板'
foo()
