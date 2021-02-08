// 封装
// 是否排序：
// 是：检验相邻的
// 否: indexOf
// 如果具备某个元素，则返回下标，否则返回-1

// 如果有 'a' 'A' 则应被认定为重复字母
// iteratee 自定义去重规则
var array1 = [1, 1, '1', 2, 2]
var array2 = [4, 2, 7, 1, 1, '1', 5, 'a', 'b', 'A']

// isSorted是否已经排序
function unique(arr, isSorted, iteratee) {
  let res = []
  var seen = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let value = arr[i]
    let computed = iteratee ? iteratee(value) : value;
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(computed)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    }
    else if (res.indexOf(computed) === -1) {
      res.push(computed)
    }
  }
  return res

}

console.log(unique(array1, true));
console.log(unique(array2, false, function(item) {
  return typeof item === 'string' ? item.toLowerCase() : item 
}));
