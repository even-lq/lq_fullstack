// 如果具备某个元素，则返回下标，否则返回-1
var array = [1, 2, 3, 1, '1', '1']

function unique(arr) {
  let res = arr.filter(function(item, index, arr) {
    return arr.indexOf(item) === index // n²
  })
  return res
}


// 排好序之后
function unique1(arr) {
  // concat不传参返回一个新数组
  let res = arr.concat().sort().filter(function (item, index, arr) {
    // return arr.indexOf(item) === index // n²
    return !index || item !== arr[index - 1]
  })
  return res
}
console.log(unique(array));
console.log(unique1(array));

