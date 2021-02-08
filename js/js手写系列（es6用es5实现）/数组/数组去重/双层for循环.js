var array = [1, 2, 3, 1, '1', '1']

function unique(arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) break;
    }

    if (j === res.length) {
      res.push(arr[i])
    }
  }
  return res
}

console.log(unique(array));

// 时间复杂度开平方了