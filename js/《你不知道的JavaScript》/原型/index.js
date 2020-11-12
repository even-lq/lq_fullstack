// Person.prototype 原型
// 函数被定义出来的那一刻就具有prototype属性
Person.prototype.name = 'lq' // 如果实例对象没有定义name属性，则会往（构造函数、构造函数的原型）上查找
Person.prototype.say = function() {
  console.log('hahahah');
}
function Person(name) {
  // this.name = name
}
var person = new Person()
console.log(person.name);
console.log(person);// person{}，没有name，原因是实例对象只会显示继承构造函数的属性和方法、隐式继承原型上的构造函数的属性和方法
console.log(Person.prototype.__proto__);


var person1 = new Person()
console.log(person1.name);

person.say()