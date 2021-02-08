// 在一个排好序的数组里植入一个元素，返回该元素的下标
function sortedIndex(arr, obj) {
  let left = 0, right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] < obj) {
      left = mid + 1
    } else if (arr[mid] > obj) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return left
}

console.log(sortedIndex([10, 20, 30], 25));