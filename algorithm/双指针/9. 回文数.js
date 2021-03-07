// 双指针
var isPalindrome = function (x) {
  // const res = str.split('').reverse().join('')
  // return res === str

  let count = parseInt(x.length / 2)
  for (let i = 0; i < count; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      return false
    }
  }
  return true
};
let str = 'yeslsey'
