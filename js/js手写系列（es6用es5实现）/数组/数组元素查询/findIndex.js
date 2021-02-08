function isBigEnough(element) {
  return element >= 15 
}
console.log([12, 1, 5, 8, 123, 44].findIndex(isBigEnough));
// 返回满足条件的第一个元素的索引

function findIndex(arr, predicate, context) {
  for (let i = 0; i < arr.length; i++) {
    // 传入指定的this防止回调函数this变成findIndex的this
    if (predicate.call(context, arr[i], i, arr)) {
      return i
    }
  }
  return -1
}

console.log(findIndex([12, 1, 5, 8, 123, 44], function(item, i, arr) {
  return item > 3
}));