/*
给定一个数组nums，写一个函数，将数组中所有的0挪到数组的末尾，⽽维持其他所有非0元素的相对位置。

举例: nums = [0, 1, 0, 3, 12]，函数运⾏后结果为[1, 3, 12, 0, 0]
 */

var nums = [0, 1, 0, 3, 12]

//法一：数组方法filter + concat
/*
var zeroArr = nums.filter(item => item == 0)
var zeroAtEnd = nums.filter(item => item != 0)
console.log(zeroArr)
console.log(zeroAtEnd)
zeroAtEnd = zeroAtEnd.concat(zeroArr)
console.log(zeroAtEnd)
*/

//法二：for循环 + push 
/*
var item 
var zero = 0
var zeroAtEnd = new Array()
for (item of nums) {
  // console.log(item)
  if( item != 0)
    zeroAtEnd.push(item)
  else
    zero += 1
}
console.log(zeroAtEnd)
console.log(zero)
for (var i = 0; i < zero; i++){
  zeroAtEnd.push(0)
}
console.log(zeroAtEnd)
*/

//法三：
/*
1.用一个变量 k 记录 非0数 的个数
2.当遇到 0 时，用后一位跟前一位作交换
3.所以k永远记录非0数的个数
*/
var k = 0
var zero = 0

for (var i = 0; i < nums.length; i++){
  if(nums[i]){
    if(k < i){
      nums[k++] = nums[i]
      nums[i] = zero
    }
    else
      k++
  }
}
console.log(nums)
