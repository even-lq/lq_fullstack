// indexOf || lastIndexOf
console.log([1, 2, 3, 4].indexOf(3)); // 正序查找3的下标
console.log([1, 2, 3, 4].lastIndexOf(2)); // 倒序
// 与findIndex相同，改变循环的顺序
function findIndex(arr, predicate, context) {
  for (let i = arr.length; i > -1; i++) {
    // 传入指定的this防止回调函数this变成findIndex的this
    if (predicate.call(context, arr[i], i, arr)) {
      return i
    }
  }
  return -1
}

console.log(findIndex([12, 1, 5, 8, 123, 44], function (item, i, arr) {
  return item > 3
}));