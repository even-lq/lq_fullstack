// 最长不含重复字符的子字符串
/*
  滑动窗口
  1. 维护一个空数组作为滑动窗口
  2. 满足条件扩大窗口（添加该元素，数组的右边界扩大）
  3. 不满足条件的缩小窗口（删除头部元素，数组左边界缩小）
     该步骤为循环判断，循环查找不满足条件的元素，调整窗口
  4. 一次遍历后得到的数组即为所求
*/

// 1. 数组 + ES6
// var lengthOfLongestSubstring = function (s) {
//   if (s === "") return 0;
//   let arr = s.split("");
//   let len = arr.length;
//   let res = [];
//   let maxLength = 0;
//   for (let i = 0; i < len; i++) {
//     let index = res.findIndex((value) => {
//       return arr[i] === value;
//     });
//     while (index !== -1) {
//       res.shift();
//       index = res.findIndex((value) => {
//         return arr[i] === value;
//       });
//     }
//     res.push(s[i]);
//     maxLength = Math.max(maxLength, res.length);
//   }
//   return maxLength;
// };
// 2. 数组 + ES5
var lengthOfLongestSubstring = function (s) {
  var str = "";
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) === -1) {
      str += s[i];
    } else {
      res = res < str.length ? str.length : res;
      str += s[i];
      str = str.slice(str.indexOf(s[i]) + 1);
    }
  }
  res = res < str.length ? str.length : res;
  return res || s.length;
};
lengthOfLongestSubstring('abcabcbb')