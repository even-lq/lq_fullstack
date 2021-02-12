// 在一个排好序的数组里植入一个元素，返回该元素的下标
// 保持this的作用域不变
function cb(func, context) {
  if (context === undefined) {
    return func
  }
  return function() {
    return func.apply(context, arguments)
  }
}
// right不mid - 1是弥补left = right时的判断
function sortedIndex(arr, obj, iteratee, context) {
  let left = 0, right = arr.length;
  iteratee = cb(iteratee, context)
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (iteratee(arr[mid]) < iteratee(obj)) {
      left = mid + 1
    } else {
      right = mid 
    }
  }
  return right
}

var stooges = [{ name: 'moe', age: 40 }, { name: 'curly', age: 60 }];
console.log(sortedIndex(stooges, { name: 'larry', age: 50 }, function(stooge) {
  return stooge.age
}));