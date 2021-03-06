// 空间换时间
let nums = [2, 7, 11, 15], target = 9
//[0，1]
var twoSum = function (nums, target) {
  const diffs = {}
  const len = nums.length

  for (let i = 0; i < len; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      return [diffs[target - nums[i]], i]
    }
    diffs[nums[i]] = i
    
  }
}

console.log(twoSum(nums, target));



var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let n2 = target - nums[i]
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
}

