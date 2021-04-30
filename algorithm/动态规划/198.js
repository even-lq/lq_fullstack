// 198 打家劫舍
// dp[i]=max(dp[i−2]+nums[i],dp[i−1])
/*
边界：dp[0] = nums[0], dp[1] = Math.max(nums[0], nums[1]);
解释：
每个dp值都代表如果偷当前房间，一共获得的最大价值

1. 无论如何，第一间房和第二间房，我们只偷值钱的
2. 对于第三间房，我们只能偷3，1或者2，偷完的结果是最大的，赋值给第三间房
3. 从第四间房开始，我们只能选择 本身房子的价值 + dp[2]，或者dp[3]
4. 以此类推
*/
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  nums[1] = Math.max(nums[0], nums[1]);
  if (nums.length === 2) return nums[1];
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] + nums[i], nums[i - 1]);
  }

  return nums[nums.length - 1];
};