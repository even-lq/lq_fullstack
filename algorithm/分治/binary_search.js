let search = (nums, target) => {
  let helper = (nums, begin, end, target) => {
    if (begin > end) return -1;
    let mid = (begin + end) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      return helper(nums, begin, mid - 1, target);
    } else {
      return helper(nums, mid + 1, end, target);
    }

  }
  return helper(nums, 0, nums.length - 1, target)
}

let arr = [0, 1, 2, 3, 4];
let res = search(arr, 3);
console.log(res);
