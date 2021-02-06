 var array = [1, 2, 3, 1, '1', '1']

function unique(arr) {
  var res = []
  var sortedArr = arr.sort(); // n
  var seen;
  for (var i = 0; i < sortedArr.length; i++) {
    if (!i || seen !== sortedArr[i] ) {
      res.push(sortedArr[i])
    }
    seen = sortedArr[i]
  }
  // 这里也是 n
  return res
}

console.log(unique(array));

// 时间复杂度 2n