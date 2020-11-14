// sayHello();
// function sayHello() {
//   var message = getMessage();
//   console.log(message);
// }
// function getMessage() {
//   return 'hello';
// }


// 词法作用域：
/*
  如果在全局上下文中未声明函数b却执行了函数b，那么在非严格模式下
  他会报错（undefined）
  如果在函数作用域里面未声明直接执行函数b，则会打印undefined，因为
  a找不到b，所以它会往上找，全局作用域也没找到的时候，就会自动创建一个
  空的函数
 */
function a() {
  b()
  console.log('a');
}
