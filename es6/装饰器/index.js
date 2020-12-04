// 生成注释
function annotation(target) {
  target.annotation = true
}

// es5+的代码用babel降级，生成es5代码
// 装饰器扩展一个类，让这个类具备额外的方法
// @annotation
// class MyClass {

// }

// 装饰器被编译为如下es5语法
// var _class;

// let MyClass = annotation(_class = class MyClass { }) || _class;

// function annotation(target) {
//   target.annotated = true;
// }