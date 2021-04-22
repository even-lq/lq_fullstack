// 词法作用域
var a = "a";
var c = "c";
function foo() {
  console.log(a);
}
function bar() {
  var a = "a1";
  function baz() {
    console.log(c);
  }
  baz(); // baz声明在bar中所以查找顺序是：先访问bar内部再访问全局
  foo();
}
bar(); // 'a' 词法作用域生效：访问的变量与其调用位置无关，跟声明位置有关


var name = 'dsad'
var object ={
  name: 'my',
  getName: function() {
    return function() {
      return this.name
    }
  }
}
var bar = object.getName()
bar()
// console.log(object.getName()());