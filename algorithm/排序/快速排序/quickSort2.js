function division(arr, left, right) {
  // 以最左边的数为基准
  const base = arr[left]
  while (left < right) {
    // 从序号右端开始，向左遍历，直到找到比base小的数
    while (left < right && arr[right] >= base) {
      right--
    }

    // 找到比base小的元素，将这个元素放在对左边的位置
    arr[left] = arr[right]

    // 从序号左侧开始，向右遍历，直到找到比base大的数
    while (left < right && arr[left] <= base) {
      left++
    }
    // 找到比base大的元素，将这个元素放在最右边的位置
    arr[right] = arr[left]

  }
  // 最后放置base位置, 此时left左侧都比base小，右边都比base大
  arr[left] = base
  return left
}

function quickSort(arr, left, right) {
  if (left >= right) return
  // 对数组进行分割，找到下次分割的基准标号
  const base = division(arr, left, right)
  // 对“基准标号”左侧进行分割
  quickSort(arr, left, base - 1)
  // 对“基准标号”右侧进行分割
  quickSort(arr, base + 1, right)

  console.log(arr)
}

quickSort([3, 2, 3, 1, 2, 4, 5, 5, 6], 0, 8)
