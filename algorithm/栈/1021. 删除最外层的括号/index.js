/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let stack = []
  let temp = []
  let arr = [...S]
  for (const key in arr) {
    if (arr[key] === '(') {
      stack.push(key)
      temp.push('(')
    }
    if (arr[key] === ')') {
      if (temp[temp.length - 1] === '(' && temp[temp.length - 2] === '(') {
        stack.pop()
        temp.pop()
      } else {
        stack.push(key)
        temp.push(')')

      }
    }
  }
  while (stack.length) {
    delete (arr[stack.pop()])
  }
  let res = arr.filter(val => val)
  return res.join('')
};