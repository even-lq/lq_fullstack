var maxSubArray = function (nums) {
  let max = Number.MIN_VALUE
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0]
  }

  function maxNums(nums, i) {
    if (i === 0) {
      max = nums[0]
      return nums[0]
    }
    let preMax = maxNums(nums, i - 1)
    let curMax = Math.max(preMax + nums[i], nums[i])
    max = Math.max(curMax, max)
    return curMax
  }

  maxNums(nums, nums.length - 1)

  return max

};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

