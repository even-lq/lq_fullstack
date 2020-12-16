let obj = {}
function Person(name, age) {
  this.name = name
  this.age = age
  // return 123
}
let result = Person.apply(obj, ['liqing', 18])
console.log(obj);