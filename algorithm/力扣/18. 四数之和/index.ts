function fourSum(nums: number[], target: number): number[][] {
  nums.sort()
  let res: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    for (let j = nums.length - 1; j - 2 > i; j--) {
      if (nums[i] + nums[j] < 0) {
        let right = j - 1
        let left = i + 1
        while (right > left) {
          if (nums[right] < 0) break
          while (left < right) {
            if (nums[i] + nums[j] + nums[right] + nums[left] === 0) {
              res.push([nums[i], nums[j], nums[left], nums[right]])
            }
            else if (nums[i] + nums[j] + nums[right] + nums[left] < 0) {
              left++
            } else {
              break
            }
          }
          right--
        }

      }
      if (nums[i] + nums[j] > 0) {
        let right = j - 1
        let left = i + 1
        while (right > left) {
          if (nums[left] > 0) break
          while (left < right) {
            if (nums[i] + nums[j] + nums[right] + nums[left] === 0) {
              res.push([nums[i], nums[j], nums[left], nums[right]])
            }
            else if (nums[i] + nums[j] + nums[right] + nums[left] > 0) {
              right--
            } else {
              break
            }
          }
          left++
        }
      }
    }
  }

};