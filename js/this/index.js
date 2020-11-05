function foo() {
  console.log(this.a);
}
var obj = {
  a: 3,
  foo: foo // 第一次引用
}
var bar = obj.foo // 第二次引用进入到了全局中
var a = 'hello'
bar() // hello 隐式丢失，应用了默认绑定的规则