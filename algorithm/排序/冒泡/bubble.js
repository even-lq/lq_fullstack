// 思想:从第一个元素开始，重复比较相邻的两项，若第一项比第二项大，则交换两者的位置，反之则不动
// 时间复杂度： O(n^2)


let arr = [5, 3, 2, 4, 1, 0]

// 35241
// 32541
// 32451
// 32415

// 重复上述步骤，每次都会把最大的元素冒到末尾


function bubble(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) { // 让思想重复5次
    for (let j = 0; j < len - 1; j++) { // 前后对比4轮
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 优化1：每次都把最大的排在末尾，所以每次都少一轮比较(已经排好的不用再比较了)
function bubble1(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) { // 让思想重复5次
    for (let j = 0; j < len - 1 - i; j++) { // 前后对比4轮
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// 优化2：最理想的情况下：O(n) => [1, 2, 3, 4, 5]
function bubble2(arr) {
  let len = arr.length

  for (let i = 0; i < len - 1; i++) { // 让思想重复5次
    let flag = false
    for (let j = 0; j < len - 1 - i; j++) { // 前后对比4轮
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        flag = true
      }
    }
    // 对于排好序的直接输出
    if (flag === false) {
      return arr
    }
  }
  return arr
}
console.log(bubble2(arr));