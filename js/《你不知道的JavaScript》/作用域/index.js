function foo() {
  // console.log(123);
  var a = 123
}
foo()
console.log(a); // a取不到foo里面的a
// console.log(b); // undefined


var a = 123 // 全局变量
function foo() {
  console.log(a);
}
foo() // 打印123


function foo(a) {
  var b = a * 2

  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3)
}
foo(2)


// eval() 欺骗词法作用域
function foo(str, a) {
  eval(str) // var b = 3 参数的这行代码直接搬到该行来执行，使得b=3
  console.log(a, b);
}
var b = 2
foo('var b = 3', 1)



// with
var obj = {
  a: 1,
  b: 2,
  c: 3
}
// obj.a = 3
// obj.a = 4
// obj.a = 5
with (obj) {
  a = 3,
    b = 4,
    c = 5
}

function foo(obj) {
  with (obj) {
    a = 2
  }
}
var o1 = {
  a: 3
}
var o2 = {
  b: 3
}
foo(o1) // a = 2
foo(o2)
console.log(o2.a);  // undefined (并非报错)
console.log(a); // a = 2，a变成了全局变量




function foo(a) {
  var b = 2
  function bar() {

  }
  var c = 3
}
// bar() // 无法执行，bar()不在全局中
console.log(a, b, c); // 无法执行，abc都在foo()的作用域中

