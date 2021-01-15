// 1. 关于0
//    只有找到0，才移动左线
// 2. 关于2
//    找到2，移动右线
//    移动只有i - 1 ， i ++ 再判断一次是不是2，如果是2还要重复上移动右线
var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      swap(i, left++, nums)
    } else if (nums[i] === 2) {
      swap(right--, i--, nums)
    }
  }

  function swap(i, j, nums) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
};