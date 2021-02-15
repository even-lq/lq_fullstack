function sub_curry(fn) {
  return function () {
    return fn()
  }
}

function curry(fn, length) {
  length = length || fn.length
  return function () {
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    } else {
      return fn()
    }
  }
}

function func() {
  console.log(1);
}

let fun = curry(func)
// fun()
// curry(sub_curry(func))
// curry(function() {
//   return func()
// })

fun()()
// 相当于
curry(sub_curry(function () {
  return func()
}))
// 相当于 
curry(sub_curry(function () {
  return (function () {
    return func()
  })()
}))
// 相当于
curry(function() {
  return func()
})