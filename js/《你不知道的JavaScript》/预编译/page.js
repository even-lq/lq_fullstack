// 函数声明也会提升：变量会提升到作用域的首部，函数也会，所以函数无论声明在script标签中的
// 任何地方都可以被执行，比如下面的函数可以在顶部写test(),而在其下声明函数test
function test() {
  var a = 111
  console.log(a);
}


var a = 1
function fn(a) {
  var a = 2
  function a() { }
  var b = a
  console.log(a);
}
fn(3)// 2

// AO: {
//   a:undefined 3 function a(){} 2
//   b:undefined 2
// }


function fn(a) {
  console.log(a);
  var a = 123;
  function a() { };
  console.log(a);
  var b = function () { };
  console.log(b);
  function d() { };
  var d = a;
  console.log(d);
}
fn(1)
    // AO: {
    //   a: undefined 1 function a() {} 123
    //   b：undefined function() {};
    //   d: undefined function d() {}; 123
    // }



function test(a, b) {
  console.log(a);// 1
  c = 0;
  var c;
  a = 3;
  b = 2;
  console.log(b);// 2
  function b() { }
  function d() { }
  console.log(b);// 2
}
test(1)
    // AO: {
    //   a:undefined 1 3
    //   b:undefined function b() { } 2
    //   c:undefined 0
    //   d:function d() { }
    // }


var global = 100;
function fn() {
  console.log(global);
}
fn()
    // GO: {
    //   global: undefined 100
    //   fn: function
    // }
    // AO: {

    // }
    // 先创建GO对象，找到变量global和fn函数声明，并对这两个赋值，
    // 再创建AO对象，AO对象不满足四部曲，为空
    // 然后执行代码：global被赋值为100，执行fn(),打印global => AO没有，再去GO找，找到打印





global = 100
function fn() {
  console.log(global);
  global = 200
  console.log(global);
  var global = 300
}
fn()
var global;

// GO:{
//   global:undefined 100
//   fn:function
// }
// AO： {
//   global: undefined 200

// }
// 先创建GO对象，找到变量global和fn函数声明，并对这两个赋值（undefined和function）
// 在创建AO对象，找到global(undefined),没有形参，不用统一，也没有函数声明
// 全局执行：全局global = 100，
//          执行fn()
//          打印fn作用域中置于顶层被提升的局部变量global：undefined
//          局部global = 200
//          打印局部global 200
//          局部global = 300


global = 100
console.log(global);// 即使不声明也会打印100，因为LHS自动声明了一个变量var global