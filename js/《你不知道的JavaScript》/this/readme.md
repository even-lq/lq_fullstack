# 默认绑定
非严格模式下，this所处的词法作用域在哪里生效了，this就指向哪里
```js
function foo() {
  console.log(this); // Windows
}
foo()
```
严格模式下，全局对象无法进行默认绑定
```js
'use strict'
    function foo() {
      console.log(this); // undefined
    }
    foo()
```
# 隐式绑定
函数被引用触发隐式绑定
当一个函数的调用位置有上下文对象或者说是否被某个对象拥有或者包含时，隐式绑定的规则就会把函数调用中的this绑定到这个上下文对象
- 隐式丢失


# 显示绑定
call,apply,bind
可以使用函数的 call(..) 和 apply(..)：它们的第一个参数是一个对象，它们会把这个对象绑定到this ，接着在调用函数时指定这个 this。
```js
function foo() {
console.log( this.a );
}
var obj = {
a:2
};
foo.call( obj ); // 2
// 通过 foo.call(..) ，我们可以在调用 foo 时强制把它的 this 绑定到 obj 上。
```
如果call，apply和bind的第一个参数写的是null，那么this指向window




1. 除了在声明的对象内被调用, this 在 严格模式下 永远是 undefined。

2. 在非严格模式的状态下, this指代的是全局对象的值,在浏览器的上下文环境中，这个值就是window。