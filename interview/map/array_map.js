var arr = Array(3) // [ <3 empty items> ]
arr[0] = 2
arr.map(function (elem) {
  return '1'
})
console.log(arr.map(function (elem) {
  return '1'
})); //[ '1', <2 empty items> ]
console.log(arr);
// map() 不会对 空数组 和 数组的空值 和 被delete删除的索引 进行检测。