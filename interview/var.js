// var y
(function () {
  var x = y = 1 // 等于↓
  // var x = 1
  // y = 1 // 在全局声明 var y
})()

console.log(x); // error
console.log(y); // 1