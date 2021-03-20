// 由于Object.getPrototypeOf(函数)获取的是  函数.__proto__
// 而函数.__proto__ === Function.prototype
// 所以下面不相等

function f() {}
var a = f.prototype // {} 也就是f.prototype,与其的实例对象的__proto__相同
var b = Object.getPrototypeOf(f); // Function.prototype

console.log(a === b); // false


function Person() {}
var p = new Person()

var a = p.__proto__ // 等于 Person.prototype
var b = Object.getPrototypeOf(p) // 等于 Person.prototype
Object.getPrototypeOf(Person) // 等于 Function.prototype

console.log(a === b ); // true

var d = Person.__proto__ // Function.prototype
var e = Object.getPrototypeOf(Person) // Function.prototype
var f = Function.prototype



