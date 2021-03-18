let findKthLargest = function (nums, k) {
  return quickSelect(nums, nums.length - k)
};

let quickSelect = (arr, k) => {
  return quick(arr, 0, arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
  let index
  if (left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if (k === index) {
      return arr[index]
    } else if (k < index) {
      // Top k 在左边
      return quick(arr, left, index - 1, k)
    } else {
      // Top k 在右边
      return quick(arr, index + 1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
    i = left,
    j = right
  // 开始调整

  // 1. 小的右移
  // 2. 大的左移
  // 3. 小的相等，大的不等且小于；大的相等，小的不等且大于 =>  换
  // 4. 大小都相等，相同下标 => 跳出循环
  //               不同下标 => 右移
  while (i < j) {

    // 左指针右移
    while (arr[i] < datum) {
      i++
    }

    // 右指针左移
    while (arr[j] > datum) {
      j--
    }

    // 交换
    // if (i < j) swap(arr, i, j)
    if (i < j && arr[i] !== arr[j]) swap(arr, i, j)

    // 当数组中存在重复数据时，即都为datum，但位置不同
    // 继续递增i，防止死循环
    if (arr[i] === arr[j] && i !== j) {
      i++
    }
  }
  return i
}

// 交换
let swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// 作者：user7746o
// 链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/javascriptsi-chong-fang-shi-jie-topkwen-ti-by-user/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。