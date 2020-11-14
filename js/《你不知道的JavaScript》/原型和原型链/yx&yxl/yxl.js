Person.prototype.type = 'male'
function Person() { }
var obj = {
  name: '小明'
}
Person.prototype = obj
var person = new Person()
console.log(person); // 其原型具有name属性
console.log(person.__proto__);  // {name: "小明"}
console.log(Person.prototype);  // {name: "小明"}
var person1 = new Person()
console.log(person1); // 其原型具有name属性


