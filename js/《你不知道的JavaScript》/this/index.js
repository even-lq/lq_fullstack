function Foo() { }
Foo.prototype.getName = function () {
  console.log(this.name);
}

var bar = new Foo();
bar.name = 'alex';
bar.getName(); // alex





