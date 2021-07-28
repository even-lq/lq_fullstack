// function bind_interview(a) {
//   this.a = a;
//   console.log(this.num, this.a);
// }

// let b = {
//   num: "8",
// };
// let c = bind_interview.bind(b, "a");
// let d = new c();

// function name(params) {

// }
// console.log(name.prototype, 1);

var test = {
  a: 'a'
}
function name() {
  this.a = 'f'
  console.log(this);
}
var b = name.bind(test);
var b1 = new b();
console.log(b.prototype === undefined);
console.log(b1.name);
