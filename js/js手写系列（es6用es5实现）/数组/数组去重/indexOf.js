// 如果具备某个元素，则返回下标，否则返回-1
var array = [1, 2, 3, 1, '1', '1']

function unique(arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res
}

console.log(unique(array));
 