let arr = [1, [2, [3, 4]]]

function flatten(arr) {
  // some 返回满足某一规则的值
  // 只要检测到有一个元素是数组，就解构一次，知道检测到没有数组为止
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

console.log(flatten(arr)); // [1, 2, 3, 4]