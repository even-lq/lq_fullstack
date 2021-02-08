let arr = [1, 2, 3, 2, 0, 5]
// 降序
arr.sort(function (a, b) {
  return b - a
})

console.log(arr[0]);