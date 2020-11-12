// 块作用域 + 闭包解决var的问题
// 自执行函数会在迭代内部封闭一个新的作用域，而每个新的作用域又会生成各自的变量j，每个arr里面存的也都是各自的j
// 在这arr数组函数在内部声明外部调用形成了闭包，打印出了正确的值

function test() {
  var arr = []
  for (var i = 0; i < 10; i++) {
    (function (j) {
      arr[j] = function () {
        console.log(j);
      }
    })(i)
    // arr[i] = function () {
    //   console.log(i);
    // }
  }
  return arr
}
var myArr = test()
for (var j = 0; j < 10; j++) {
  myArr[j]()
}