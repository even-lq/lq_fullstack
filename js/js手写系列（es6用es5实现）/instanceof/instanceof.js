let arr = []
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(Object.prototype);
// console.log(Object.prototype === arr.__proto__.__proto__); // true
// 引用类型有称为对象类型，对象类型具有隐式原型，所以instanceof用来判断是否为一个对象的实例
function instance_of(L, R) {
   L = L.__proto__
   let O = R.prototype
   while (true) {
     if (L === null) return false
     if (O === L) return true
     L = L.__proto__
   }
}

console.log(instance_of(arr, Array));
// console.log(instance_of(arr, Object));