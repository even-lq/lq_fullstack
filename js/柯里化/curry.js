function sub_curry(fn) {
  console.log(fn);
  console.log(arguments);
  let args = [].slice.call(arguments, 1)
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}
function curry(fn, length) {
  length = length || fn.length; // 函数的length表示参数的个数
  // arguments代表curry和fn的参数
  let slice = Array.prototype.slice;
  return function () {
    if (arguments.length < length) {
      let combined = [fn].concat(slice.call(arguments))
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}

let test = curry(function (a, b, c) {
  return [a, b, c]
})
// console.log(test('a', 'b', 'c'));
// console.log(test('a', 'b')('c'));
console.log(test('a')('b')('c'));



// function add(a, b) {
//   return a + b
// }

// let addCurry = curry(add, 1, 2)
// console.log(addCurry());

// let addCurry = curry(add, 1)
// console.log(addCurry(2));

// let addCurry = curry(add)
// console.log(addCurry(1, 2));
