Array.prototype.f = 'f'
let arr = ['a', 'b', 'c', 'd', 'e']
let obj = {
  name: 'jiushen',
  age: 18,
  sex: 'boy'
}
console.log(obj.length);
console.log(Object.keys(obj)); // 拿到对象的所有属性，返回属性数组
// for循环遍历对象:写法不简便
// for (let i = 0; i < Object.keys(obj).length; i++) {
//   console.log(obj[Object.keys(obj)[i]]);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// forof不能遍历对象，因为forof只认迭代器，对象不具备迭代器
// for (let i of arr) {
//   console.log(i);
// }

// forin可以遍历对象，不建议用来遍历数组，因为有bug:会遍历出原型上隐式继承的属性或方法
// for (let key in arr) {
//   console.log(arr[key]);
// } 
// for (let key in obj) {
//   console.log(key);
// } 

function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this['b'] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this['A'] = 'bar-A'
  this['C'] = 'bar-C'
}
let bar = new Foo()
for (let key in bar) {
  console.log(key,bar[key]);
}