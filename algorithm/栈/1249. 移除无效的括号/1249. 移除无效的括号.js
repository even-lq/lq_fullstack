var minRemoveToMakeValid = function (s) {
  let stack = []
  let arr = [...s]
  for (const key in arr) {
    if (arr[key] === '(') {
      stack.push(key)
    }
    if (arr[key] === ')') {
      if (stack.length === 0) {
        delete (arr[key])
      } else {
        stack.pop()
      }
    }
  }
  while (stack.length) {
    delete (arr[stack[0]])
    stack.shift()
  }
  let res = arr.filter(val => val)
  return res.join('')

};