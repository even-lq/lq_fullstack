// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

// 示例 1:

// 输入: "aba"
// 输出: True
// 示例 2:

// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意:

// 字符串只包含从 a - z 的小写字母。字符串的最大长度是50000。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-palindrome-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 双指针硬编码
// var isPalindrome = function (x) {
//   // const res = str.split('').reverse().join('')
//   // return res === str

//   let count = parseInt(x.length / 2)
//   for (let i = 0; i < count; i++) {
//     if (x[i] !== x[x.length - 1 - i]) {
//       return false
//     }
//   }
//   return true
// };


// var validPalindrome = function (s) {
//   let flag = isPalindrome(s)

//   if (!flag) {
//     for (let i = 0; i < s.length; i++) {
//       let arrStr = s.split('')
//       arrStr.splice(i, 1)
//       let newStr = arrStr.join('')
//       console.log(newStr);
//       flag = isPalindrome(newStr)
//       if (flag) {
//         return true
//       }
//     }
//   }
//   return true

// };


var isPalindrome = function (str, i = 0, j = str.length - 1) {
  while (i < j) {
    if (str[i] === str[j]) {
      i++
      j--
    } else return false
  }
  return true
};

var validPalindrome = function (s) {
  let i = 0, j = s.length - 1
  let flag = isPalindrome(s, i, j)
  if (flag) return true
  while (i < j) {
    if (s[i] !== s[j]) {
      // 不能改为++ --，会同时生效（我也不知道为什么
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
    }
    i++
    j--
  }
  return true

}
console.log(validPalindrome("abca"));
console.log(validPalindrome("aba"));

