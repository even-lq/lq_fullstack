// 闭包的优点
// 累加：没有封装
var count = 0
function add() {
  count ++
  console.log(count);
}
add()
add()
add()
// 打印1 2 3
// 如果把var count = 0放进add里面就会打印3个1，因为每执行完一次add，add就被销毁了，所以每次count+1后都没了


// 累加：闭包(封装)
// 1. 实现公有变量：num
// 闭包导致add AO一直存在于作用域链中
function add() {
  var num = 0;
  function a() {
    console.log(++num);
  }
  return a
}
var result = add()
result()
result()
result()


