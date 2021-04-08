// 连续子数组的最大和
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n) 。


// 示例1:

// 输入: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出: 6
// 解释: 连续子数组[4, -1, 2, 1] 的和最大，为 6。


// 分治
// 思路
// 先把数组平均分成左右两部分。

// 此时有三种情况：

// 最大子序列全部在数组左部分
// 最大子序列全部在数组右部分
// 最大子序列横跨左右数组
// 对于前两种情况，我们相当于将原问题转化为了规模更小的同样问题。

// 对于第三种情况，由于已知循环的一个端点（即中点），我们只需要进行一次循环，分别找出
// 左边和右边的端点即可。

// 因此我们可以每次都将数组分成左右两部分，然后分别计算上面三种情况的最大子序列和，取出最大的即可。
function helper(list, n, m) {
  if (m === n) {
    return list[m]
  }

  let sum = 0;
  let lmax = -Number.MAX_VALUE;
  let rmax = -Number.MAX_VALUE;
  let mid = ((m - n) >> 1) + n
  let l = helper(list, n, mid)
  let r = helper(list, mid + 1, m)

  for (let i = mid; i >= n; i--) {
    sum += list[i]
    if (sum > lmax) {
      lmax = sum
    }
  }

  sum = 0

  for (let i = mid + 1; i <= m; i++) {
    sum += list[i]
    if (sum > rmax) {
      rmax = sum
    }
  }

  return Math.max(l, r, lmax + rmax)
}
var maxSubArray = function (nums) {
  return helper(nums, 0, nums.length - 1)

};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));