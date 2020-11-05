// 块级作用域
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i);// 10 var i = 0的本质就是在全局作用域中创建的
// 改用let块级作用域，让i只在for里面生效

var a = 1 // 实质是 var a; a = 1
// 但是会发生声明提升使得var a;被置顶到代码头部
// var i = 0; var i 被置顶到代码顶部变成了全局变量


console.log(a); // undefined
var a = 2;