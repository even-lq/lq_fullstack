function foo() {
  var a = 1
  var b = a
  a = 2
  console.log(a); // 2
  console.log(b); // 1 // 深拷贝
}
foo()


function foo2() {
  var a = { name: '杨宝' }
  var b = a
  a.name = '瑞祯'
  console.log(a); // {name: ' 瑞祯'}  
  console.log(b); // {name: ' 瑞祯'} // 浅拷贝 
}
foo2()


function foo() {
  var a = '杨宝'
  var b = a
  var c = { name:'杨宝' }
  var d = c
}
foo()
