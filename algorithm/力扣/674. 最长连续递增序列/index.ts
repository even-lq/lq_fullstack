function findLengthOfLCIS(nums: number[]): number {
  let maxLength = 0;
  let tempStack = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined || nums[i] > nums[i - 1]) {
      maxLength = Math.max(maxLength, tempStack.length + 1)
    } else {
      tempStack = []
    }
    tempStack.push(nums[i])
  }
  return maxLength
};

console.log(findLengthOfLCIS([]
));
