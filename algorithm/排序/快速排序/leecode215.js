function partition(arr, left, right) {
  // 此法需要取第一项为pivot
  let i = left, j = right;
  let pivot = arr[i]
  while (i < j) {
    while (arr[j] >= pivot && i < j) {
      //  i < j 加上这个条件是因为防止arr[j] >= pivot 但是 i > j 的情况，因为
      // 我们始终都要保持 arr[i] < pivot < arr[j]
      j--;
    }
    arr[i] = arr[j]
    while (arr[i] <= pivot && i < j) {
      i++;
    }
    arr[j] = arr[i]
  }
  arr[i] = pivot;
  // 正面传入的数组nums是会被改变的,所以这里必须要 arr[i] = pivot;
  return i;
}

var findKthLargest = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;
  let target = nums.length - k;
  let i = partition(nums, left, right)
  while (i != target) {
    if (i < target) {
      left = i + 1
    }else {
      right = i - 1
    }
    i = partition(nums, left, right)
  }
  // console.log(i);
  // console.log(nums);
  return nums[i]
};

var getLeastNumbers = function (nums, k) {
  let left = 0;
  let right = nums.length - 1;
  let i = partition(nums, left, right);
  while (i != k) {
    if (i < k) {
      left = i + 1;
    } else {
      right = i - 1;
    }
    i = partition(nums, left, right);
  }
  return nums.slice(0, 4);
};
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(getLeastNumbers([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
