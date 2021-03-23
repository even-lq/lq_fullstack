
let arr = [8, 7, 6, 6, 5, 4, 3, 2, 1, 0, 2]

// 从中间分，一直分下去，直到分不了为止
// 两两合并排序，合并之后再两两合并

// 分割
// [8， 7, 6, 5, | 4, 3, 2, 1]
// [8， 7,  | 6, 5, | 4, 3, | 2, 1]
// [8， | 7,  | 6,  | 5,  | 4， | 3， | 2,  | 1]

// 合并
// [7,8，|5,6,|3,4，|1,2]
// [5,6,7,8，|1,2,3,4]
// [1,2,3,4,5,6,7,8]

// 反复操作 => 递归，迭代
// 合并有序 => 双指针
// 有去有回 => 回溯


function mergeSort(arr) {
  const len = arr.length
  // 边界情况

  if (len <= 1) {
    return arr
  }

  // 分割点
  const mid = Math.floor(len / 2)
  // 递归分割左子树
  const leftArr = mergeSort(arr.slice(0, mid))
  // 递归分割右子树
  const rightArr = mergeSort(arr.slice(mid, len))

  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  return arr
}

function mergeArr(arr1, arr2) {
  let i = 0, j = 0
  let res = []
  let len1 = arr1.length
  let len2 = arr2.length

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  if (i < len1) {
    return res.concat(arr1.slice(i))
  } else {
    return res.concat(arr2.slice(j))
  }
}

console.log(mergeSort(arr));