// 调用栈
var a = 2
function add(b, c) {
  // console.log(a); // 作用域链的关系会打印2
  return b + c
}
function addAll(b, c) {
  var d = 10
  var a = 3
  result = add(b, c)
  return a + result + d
  // function add() {
  //   console.log(a); // 作用域链的关系会打印3
  //   return b + c
  // }
  // add()
}
addAll(3, 6)
