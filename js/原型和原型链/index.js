function Person() {

}
function People() { }


var p = function () {}

p.prototype = new Person()
// console.log(p.prototype);
// console.log(Person.prototype);



// console.log(typeof Person.prototype);
// console.log(Person.prototype);

function Data() {}
// Data.prototype.brew = function () {
//   console.log('brew');
// }
// Data.prototype.pourInCup = function () {
//   console.log('pourInCup');
// }
console.log(Data.prototype);
console.log(Data.prototype.prototype);
console.log(Data.__proto__);
console.log(Data.__proto__.__proto__);
console.log(Data.__proto__.__proto__.__proto__);
console.log(Data.prototype.constructor === Data);

var d = new Date()
console.log(d.__proto__);
console.log(d.prototype);

// Data构造函数的prototype指向Data{}原型对象（如果{}里面有属性、方法的话也是对象）