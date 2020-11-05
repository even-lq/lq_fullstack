# 默认绑定
this所处的词法作用域在哪里生效了，this就指向哪里
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
当一个函数引用有上下文对象时，隐式绑定的规则就会把函数调用中的this绑定到这个上下文对象
- 隐式丢失


# 显示绑定