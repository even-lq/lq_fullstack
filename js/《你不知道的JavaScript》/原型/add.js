// function Bus() {

// }
// Car.prototype = {
//   abc: Bus
// }
Car.prototype = {
  constructor: 'Bus'
}
function Car() {

}
var car = new Car()
// constructor指向的是Car()， 目的是让Car()构造出来的实例对象car找到自己的出处（构造函数）
console.log(car.constructor); //[Function: Car]
console.log(Car.prototype.constructor);//[Function: Car]
console.log(car.constructor === Car.prototype.constructor); //true
// console.log(car.abc === Car.prototype.abc);

