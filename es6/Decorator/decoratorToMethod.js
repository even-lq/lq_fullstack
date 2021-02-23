var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

// _applyDecoratedDescriptor 去拷贝属性



// 装饰器(Decorator) 是-种与类(class) 相关的语法，用来注释或修改类和类方
// 法。许多面向对象的语言都有这项功能，目前有 - 一个提案将其引入了ECMAScript。
// 装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。
// @annotation
// class MyClass {
// }
// function annotation(target) {
//   target.annotated = true
// }
// @decorator
// class A {} 
// // 等同于
// class A {} 
// A = decorator(A) || A
let MyClass = (_class = class MyClass {
  method() {}

}, (_applyDecoratedDescriptor(_class.prototype, "method", [readonly, unenumerable], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype)), _class);

function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function unenumerable(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}
