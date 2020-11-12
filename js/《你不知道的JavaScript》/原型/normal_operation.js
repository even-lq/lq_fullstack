// 原型的常规操作
Person.prototype.lastName = 'Liu'
function Person(name) {
  this.name = name
}

var person = new Person('zp')

// console.log(person.lastName);
// person.lastName = 'Wang' // 不会改动原型属性
// console.log(person.lastName);
// console.log(person);

delete person.lastName
console.log(person.lastName);
