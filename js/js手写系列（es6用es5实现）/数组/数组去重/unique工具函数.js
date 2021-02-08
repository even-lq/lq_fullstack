// 封装
// 是否排序：
// 是：检验相邻的
// 否: indexOf
// 如果具备某个元素，则返回下标，否则返回-1
var array1 = [1, 1, '1', 2, 2]
var array2 = [4, 2, 7, 1, 1, '1', 5]

// isSorted是否已经排序
function unique(arr, isSorted) {
  var res = []
  var seen;
  for (var i = 0, len = arr.length; i < len; i++) {
    if (isSorted) {
      if (!i || seen !== arr[i]) {
        res.push(arr[i])
      }
      seen = arr[i]
    } else if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res

}

console.log(unique(array1, true));
console.log(unique(array2));
