// __proto__ 与 Object.getPrototypeOf() 的返回值一致

var a = {}
var b = Object.prototype

// 对象无prototype属性
a.prototype // 等于 undefined
Object.getPrototypeOf(a) // 等于 a.__proto__
console.log([a.prototype === b, Object.getPrototypeOf(a) == b]);
// [false, true]