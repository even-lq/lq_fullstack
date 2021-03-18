function partition(arr, left, right) {
  // 保证去到的数是随机的
  let pivot = arr[Math.floor(Math.random() * (right - left + 1)) + left]
  let i = left;
  let j = right;

  while (i < j) {
    while (arr[i] < pivot) {
      i++
    }

    while (arr[j] > pivot) {
      j--
    }

    if (i < j && arr[i] !== arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
    if (arr[i] === arr[j] && i !== j) i++
  }
  // arr[i] = pivot
  return i

}
function quickSort(arr, left, right) {
  if (left >= right) return
  let index = partition(arr, left, right)

  quickSort(arr, index + 1, right)
  quickSort(arr, left, index - 1)

  console.log(arr)

}

quickSort([3, 2, 3, 1, 2, 4, 5, 5, 6], 0, 8)