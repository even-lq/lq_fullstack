var maxSubArray = function (nums) {
  let len = nums.length
  let max = nums[0]
  for (let i = 1; i < len; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i]
    // nums[i] = Math.max(nums[i - 1] + nums[i], nums[i])
    if (nums[i] > max) {
      max = nums[i]
    }

  }
  return max

};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

