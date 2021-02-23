var _class;

// 装饰器(Decorator) 是-种与类(class) 相关的语法，用来注释或修改类和类方
// 法。许多面向对象的语言都有这项功能，目前有 - 一个提案将其引入了ECMAScript。
// 装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。
let MyClass = annotation(_class = class MyClass {}) || _class;

function annotation(target) {
  target.annotated = true;
}
