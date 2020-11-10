// GO: {
//   glob:undefined 100
//   a: function() {...}
// }
function a() {
  function b() {
    var b = 222
    console.log(this);
  }
  var a = 111
  b()
  console.log(a); // 去aAO里面找，找不到采取GO里面找
}
var glob = 100
// aAO: {
//   a:undefined 111
//   b: function() {... }
// }
// bAO: {
//   b:undefined 222
// }
a()


// 作用域链
// a定义a.[scope]] ---> 0: GO:{}
// a执行a.[[scope]] ---> 0: aA0:{} 1: GO:{}
// b定义a.[scope]] ---> 0: aA0:{} 1: G0: {}
// b执行a.[scope]] ---> 0: bA0:{} 1: aA0:{} 2: G0:{}
// b执行完之后 b的A0就要销毁
//紧接着a也说，我也执行完了，我的A0也要销毁，因为a的A0包含了b函数，当a的A0销毁时b函数会失效|

