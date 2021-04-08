// 连续子数组的最大和
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n) 。


// 示例1:

// 输入: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出: 6
// 解释: 连续子数组[4, -1, 2, 1] 的和最大，为 6。


// 分治 
var maxSubArray = function (nums) {
  const len = nums.length
  let max = -Infinity
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum = 0
    for (let j = i; j < len; j++) {
      sum += nums[j]
      if (sum > max) {
        max = sum
      }      
    }
    
  }
  return max

};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));