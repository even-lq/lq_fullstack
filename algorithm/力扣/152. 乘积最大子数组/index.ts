function maxProduct(nums: number[]) {
  let max = nums[0]
  let current = 1
  let temp = 1
  for (let i = 0; i < nums.length; i++) {

    if (nums[i] < 0) {
      if (current < 0) {
        max = current * nums[i]
      } else {
        temp = 1
      }
    }
    else if (nums[i] > 0) {
      temp = temp * nums[i]
      max = Math.max(temp, max)

    }
    current = current * nums[i]
    if (nums[i] === 0) {
      max = Math.max(0, max)
      current = 1
      temp = 1
    }
  }
  return max
}

console.log(maxProduct([-3, 0]));
