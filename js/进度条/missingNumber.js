// 求和法
var missingNumber = function (nums) {
  let n = nums.length;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < n + 1; i++) {
    sum1 += i;
    sum2 += (nums[i] || 0);
  }
  return sum1 - sum2;
};

// 异或法
var missingNumber = function (nums) {
  let n = nums.length;
  let res = nums.length;
  for (let i = 0; i < n; i++) {
    res ^= i ^ nums[i]
  }
  return res;
};
// console.log(1 ^ 1);
// console.log(1 ^ 2);
// console.log(1 ^ 3);
// console.log(1 ^ 4);
// console.log(1 ^ 5);
// console.log(1 ^ 6);
