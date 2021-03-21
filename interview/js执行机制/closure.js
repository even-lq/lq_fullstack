function foo() {
  var myName = '甘总'
  let test1 = 1
  const test2 = 2
  var innerbar = {
    getName: function () {
      console.log(test1);
      return myName
    },
    setName: function (newName) {
      myName = newName
    }
  }
  return innerbar
}
var bar = foo() // 全局变量bar引用闭包
// 返回的两个方法要使用foo作用域的变量，产生闭包
bar.setName('杨宝')
console.log(bar.getName()); // 1 杨宝

function abc() {
  let test = foo() // 局部变量引用闭包
}
