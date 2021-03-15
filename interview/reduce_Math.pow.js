[ [3, 2, 1].reduce(Math.pow), [].reduce(Math.pow) ] // [9, error]
// Math.pow() 函数返回基数（base）的指数（exponent）次幂。

let arr = [3, 2, 1]
let pow = function(a, b) {
  console.log(a, b);
  return a ** b 
}
arr.reduce(pow)
// pow 1. 3的2次
// pow 2. 9的1次

// reduce()对于空数组是不会执行回调函数的。
