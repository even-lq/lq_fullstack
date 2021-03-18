var largestNumber = function (nums) {
  nums.sort((a, b) => {
    let s1 = `${a}${b}`
    let s2 = `${b}${a}`
    return s2 - s1
  })

  return nums[0] ? nums.join('') : '0'
};

console.log(largestNumber([3, 30, 34, 5, 9]));