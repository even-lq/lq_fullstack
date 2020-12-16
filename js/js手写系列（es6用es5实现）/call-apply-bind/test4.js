// 定义这个方法为myBind
Function.prototype.myBind = function (thisArg) {
  if (typeof this !== 'function') {
    return;
  }
  var _self = this;
  var args = Array.prototype.slice.call(arguments, 1) //从第二个参数截取
  return function () {
    return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments))); // 注意参数的处理
  }
}
function foo(name, name2) {
  this.name = name;
  this.name2 = name2
}

var obj = {}

//上下文 功能  done
var bar = foo.myBind(obj)
bar('jack')
console.log(obj);
console.log(obj.name) //'jack'

// 参数 功能   done
var tar = foo.myBind(obj, 'rose');
tar('mike')
console.log(obj.name, obj.name2) //'rose'
// new 功能   error
var alice = new bar('alice')
console.log(obj.name) //alice   obj name should be 'jack'
console.log(alice.name) //undefined, alice name should be 'alice'
