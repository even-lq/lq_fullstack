function threeSumClosest (nums: number[], target: number): number {
  let min = nums[0] + nums[1] + nums[2] - target
  let res = nums[0] + nums[1] + nums[2]
  nums.sort((a, b) => a - b)
  nums.forEach((num, i) => {
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      let val = nums[i] + nums[L] + nums[R] - target
      if (Math.abs(min) > Math.abs(val)) {
        min = Math.abs(val)
        res = val + target
      }
      if (val < 0) L++
      if (val > 0) R--
      if (val === 0) return target
    }
  })
  return res
}

console.log(threeSumClosest([1, 1, 1, 0], -100))
