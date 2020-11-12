// 模拟构造函数
function myPerson(name, age) {
  var that = {}
  that.name = name
  that.age = age
  return that
}

var person1 = myPerson('wn', 18)
var person2 = myPerson('da', 20)
console.log(person1, person2);


function Car(color) {
  this.color = color
  this.name = 'BMW'
  return {} // return 123
}
var car = new Car('red')
console.log(car); // {} [] function
// 如果return原始值，则不会发生改变
// 但是return引用类型，则返回引用类型