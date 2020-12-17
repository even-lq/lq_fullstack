// 第四版
Function.prototype.bind2 = function (context) {

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () { };

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
}

var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
// shopping
// kevin
// bindFoo.prototype.friend = 'tim'
bar.prototype.friend = 'kevin';
console.log(obj.friend);
console.log(bindFoo.prototype.constructor.prototype === bar.prototype);

