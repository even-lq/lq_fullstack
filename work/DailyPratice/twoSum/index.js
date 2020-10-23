var nums = [2, 7, 11, 15]
var twoSum = function (nums, target) {
  // let map = [] /*也可以*/
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] != undefined) { 
      console.log(map)
      return [map[nums[i]], i]
    } else {
      map[target - nums[i]] = i
    }
  }
};
console.log(twoSum(nums, 9))

// var a = [{ 1: 3 }, { 2: 4 }, { 3: 5 }] 
// console.log(a)