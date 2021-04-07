function once(func) {
  var tag = true
  return function() {
    if (tag === true) {
      func.apply(null, arguments)
      // console.log(tag);
      tag = false
    } else return undefined
  }
}

function test() {
  console.log('123');
}

// 用once(test)()没有效果的原因是每次都是从once的函数开始的，自执行函数每次都是一个闭包
// 所以要用变量保存闭包
var bar = once(test)
// once(test)()
// once(test)()
bar()
bar()