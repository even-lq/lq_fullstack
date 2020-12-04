// class Foo {
//   // 构造函数
//   constructor() {
//   }

//   // 静态方法
//   static bar() {
//     this.baz()
//   }
//   static baz() {
//     console.log('world');
//   }
//   baz() {
//     console.log('world');
//   }
// }
// Foo.bar() // world
// Foo.baz() // (调用公共方法) 报错
// let foo = new Foo()
// foo.baz() // (调用公共方法) 报错

// constructor() 构造函数创建指定实例或计算属性
class Shape {
  constructor (width, height) {
    this._width = width
    this._height = height
    this._area = width * height
  }
  // 带有get的方法在调用时可以省去括号
  get area() {
    return this._width * this._height
  }
}

const square = new Shape(10, 10)
console.log(square.area);
console.log(square._area);

// 私有属提案
// class IncreasingCounter {
//   #count = 0;
//   value() {
//     console.log('Getting the current value!');
//     return this.#count;
//   }
//   increment() {
//     this.#count++;
//   }
// }

// const counter = new IncreasingCounter();
// // counter.#count // 报错
// // counter.#count = 42 // 报错
// console.log(counter.value());
// console.log(counter.#count);



// 创建私有属性的方法（不够好）
// class Widget {
//   foo(baz) {
//     bar.call(this, baz);
//   }

//   // ...
// }

// function bar(baz) {
//   return this.snaf = baz;
// }
// let widget = new Widget()
// widget.foo('dsad')
// console.log(widget.snaf);
// console.log(widget.foo);