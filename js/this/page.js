function foo() {
  console.log(this); // this所处的词法作用域在哪里生效了，this就指向哪里
}
foo()


// 不使用this
function identify(context) {
  return context.name.toUpperCase()
}
function speak(context) {
  var greeting = "Hello I am " + identify(context)
  console.log(greeting);
}
var me = {
  name: 'wn'
}
var you = {
  name: 'yangbao'
}
speak(me)



// call方法改变this的指向
function identify() {
  return this.name.toUpperCase()
}
function speak() {
  var greeting = "Hello I am " + identify.call(me) // call方法使得identify里面的this指向me
  // call方法的参数是谁，调用call方法的this指向的就是谁
  console.log(greeting);
}
var me = {
  name: 'wn'
}
var you = {
  name: 'yangbao'
}
speak()// 此时不用传参，因为call方法已经穿了参数



function identify() {
  return this.name.toUpperCase()
}
function speak() {
  var greeting = "Hello I am " + identify.call(this)
  console.log(greeting);
}
var me = {
  name: 'wn'
}
var you = {
  name: 'yangbao'
}
speak.call(you)
// speak作用域中identify.call(this) 的this指向全局
// speak.call(you) 中的call把speak的this指向了you
// 所以其实是identify.call(you)，you.name.toUpperCase()
// this隐式传递


function foo() {
  let person = {
    name: 'wn',
    age: 18
  }
  console.log(this); // Windows
}
function bar() {
  let person = {
    name: '蜗牛',
    age: 20
  }
  foo()
}
bar() // this在bar未执行时就已经绑定好了作用域，由于bar未执行，所以它自身并没有作用域，它的作用域指向全局的作用域
// 所以this => bar => Windows




function foo() {
  console.log(this.a); // 2
}
var a = 2
foo()


function foo() {
  console.log(this.a); 
}
var a = 2
foo()
  (function () {
    'use strict'
    foo() // 严格模式下，foo的调用，与位置无关
  })()



function foo() {
  console.log(this.a);// 3
}
var obj2 = {
  a: 3,
  foo: foo
}
var obj1 = {
  a: 2,
  obj2: obj2
}
obj2.foo()



// 隐式绑定
function foo() {
  console.log(this.a);// 3 因为obj2拥有了foo，所以foo在obj2中生效
}
var obj2 = {
  a: 3,
  foo: foo // 引用，函数引用了上下文对象obj2所以foo的this指向obj2
}
var obj1 = {
  a: 2,
  obj2: obj2
}
obj1.obj2.foo()