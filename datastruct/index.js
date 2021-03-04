var removeDuplicates = function (S) {
  let arr = S.split('')
  let stack = []
  let i = 0
  while (arr.length && i !== arr.length) {
    if (stack.length === 0 || arr[i] !== stack[stack.length - 1]) {
      stack.push(arr[i])
    } else stack.pop()
    i++
  }
  return stack.join('')
};
console.log(removeDuplicates("abbaca"));