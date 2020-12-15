// function a() {
//   console.log(arguments);
//   console.log([...arguments]);
//   console.log(Array.from(arguments));
//   console.log(Array.prototype.shift.call(arguments)); // 会改变传入的参数，传入的参数变成了去除首部的类数组
//   console.log(arguments);
//   console.log(typeof arguments);
//   for (const iterator of arguments) {
//     console.log(iterator);
//   }
// }
// a(1, 2, 3)


let b = {
  name: 'xixi',
  a: function() {
    console.log(this.name);
  }
}
b.a()
let c = b.a
c()
c.call(b) // 变成了b的作用域
c.call()  // 没有改变作用域，仍然是window


function d(params) {
  console.log(params);
  const args = [...arguments].slice(1)
  console.log(args);
}
d(1, 2, 3)