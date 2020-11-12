// var obj = {}
// // 两者相同
// var obj = new Object()


// console.log(obj.__proto__ === Object.prototype);

// Object.create(原型)

var obj = {
  name: 'wn',
  age: 18
}

var obj1 = Object.create(obj)
// obj1.__proto__ = obj

var a = Object.create(null)
a.__proto__ = { name: 'wn'}
console.log(a); // 给a安排了一个原型，但是不能访问a.name