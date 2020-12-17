function partition(arr, left, right) {
  let i = left, j = right;
  let pivot = arr[i]
  while (i < j) {
    while (arr[j] >= pivot && i < j) {
      j--;
    }
    arr[i] = arr[j]
    while (arr[i] <= pivot && i < j) {
      i++;
    }
    arr[j] = arr[i]
  }
  arr[i] = pivot;
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
  console.log(i);
  console.log(nums);
  return nums[i]
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 6));
