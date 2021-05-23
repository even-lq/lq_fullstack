function partition(arr, left, right) {
  let i = left,
    j = right;
  let pivot = arr[i];

  while (i < j) {
    while (arr[j] >= pivot && i < j) {
      j--;
    }
    arr[i] = arr[j];
    while (arr[i] <= pivot && i < j) {
      i++;
    }
    arr[j] = arr[i];
  }

  arr[i] = pivot;
  return i;
}

var getLeastNumbers = function (nums, k) {
  let left = 0,
    right = nums.length - 1;
  let i = partition(nums, left, right);
  while (i !== k) {
    if (i < k) {
      left = i + 1;
    } else {
      right = i - 1;
    }
    i = partition(nums, left, right);
  }
  return nums.slice(0, k)
};
console.log(getLeastNumbers([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
