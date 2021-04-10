// 贪心策略
// 保证 [每 次 操 作] 都是局部最优的，从而使最后得到的结果是全局最优的。

// 最大子序和：每次选择的子数组都要求是最大的
// 所以我们要定义一个最大值来存储，然后每次都比较前一个数+现在的数 与 现在的数的大小，选择最大的那个
// 选出来后再与存储最大值的数比较，更新最大值，再返回最大值
var maxSubArray = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  if (nums.length === 1) {
    return nums[0]
  }

  let currMax = nums[0]
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(currMax + nums[i], nums[i])
    max = Math.max(currMax, max)
  }
  return max

};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

