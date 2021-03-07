// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


let nums = [-1, 0, 1, 2, -1, -4]
// [[-1, 0, 1], [-1, -1, 2]]
var threeSum = function (nums) {

  let stack = []

  nums = nums.sort((a, b) => {
    return a - b
    // 升序
  })
  let len = nums.length

  for (let i = 0; i < len - 2; i++) {
    let j = i + 1
    let k = len - 1

    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      } else {
        stack.push([nums[i], nums[j], nums[k]])
        k--
        j++
        while (j < k && nums[k] === nums[k + 1]) {
          k--
        }
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
      }
    }



  }

  return stack
};
console.log(threeSum(nums));