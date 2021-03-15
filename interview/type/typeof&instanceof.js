// console.log(typeof (1)); // number
// console.log(typeof ([]));// object
// console.log([] instanceof Array); // true
// console.log([] instanceof Object); // true
// console.log('[]' instanceof String); // false



// 对象的Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
// 比如，foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo) 。
class PrimitiveString {
  // static 只能当前类的内部访问的方法
  // Symbol.hasInstance让我们自定义instanceof的行为
  static [Symbol.hasInstance] (x) {
    return typeof x === 'string'
  }
}

console.log('hello' instanceof PrimitiveString); // true
// 与下面的方法相同
console.log(PrimitiveString[Symbol.hasInstance]('hello')); // true