function Foo() {
  this.value = 1
}
Foo.prototype.getValue = () => console.log(this.value);
// Foo.prototype.getValue = function(){console.log(this.value);}

let foo = new Foo()
foo.getValue() // undefined

// 原因：箭头函数没有this
// 在原型对象的属性中赋值一个箭头函数，箭头函数的this指向window，
// 该箭头函数找不到对象中的属性，只能在全局中创建，所以打印undefined