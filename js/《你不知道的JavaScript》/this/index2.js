// 隐式绑定
function foo() {
  console.log(this);
}

var bar = {
  foo: foo
}
// 调用了foo(),foo()在bar下运行
bar.foo()// bar

// 隐式丢失
function foo() {
  console.log(this);
}

var bar = {
  foo: foo
}

var bar2 = bar.foo
// 没有调用foo()，bar2引用bar.foo，bar2在windo运行
bar2()// windows
