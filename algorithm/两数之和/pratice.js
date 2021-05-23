let nums = [2, 7, 11, 15],
  target = 9;
// var twoSum = function (nums, target) {
//   let len = nums.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (nums[i] === target - nums[j]) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  let len = nums.length;
  // let obj = {}
  let map = new Map()
  for (let i = 0; i < len; i++) {
    // if (obj[target - nums[i]] !== undefined) {
    //   return [obj[target - nums[i]], i];
    // }
    // obj[nums[i]] = i;
    if (!map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i) 
  }
  
};
console.log(twoSum(nums, target));
