Person.prototype.say = function() {
  console.log('hhhh');
}
function Person(name, age) {
  this.name = name
  this.age = age
  // return 123
}

let person = new Person('xm', '18')
console.log(person);




/*
  new: 1.返回的是一个对象
       2.返回的对象继承原型对象的属性和方法
 */
function myNew() {
  let obj = {}
  // 2.
  let Constructor = Array.prototype.shift.call(arguments) // shift方法会改变原数组
  obj.__proto__ = Constructor.prototype
  // call 和 apply 改变 this 指向 a.call(b) , 把a的this指向b
  // call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。

  let result = Constructor.apply(obj, arguments)
  console.log(typeof result, '?');
  return typeof result === 'object' ? result : obj
}
let myPerson = myNew(Person, 'xm')
console.log(myPerson);