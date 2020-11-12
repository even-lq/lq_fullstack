// 原始值类型不能具备属性和方法
Number.prototype.toString = function () {
  return 'haha'

}// Number.prototype的原型Object.prototype的toString方法
var num = 123 // 相当于 new Number(123)
// 所以num是一个对象(number对象)，可以用num.toString()

// Number.prototype.__proto__ === Object.prototype

Object.prototype.toString = function() {
}
Person.prototype.toString = function () {
  return 'hehe'
}// 替换Person.prototype的原型Object.prototype的toString方法
function Person() {

}
var person = new Person()
console.log(person.toString());
console.log(num.toString());
