// console.log(1 + '1'); // "11"
// console.log(true + true); // 2
// console.log(true + '1') // 'true1'
// // 先[1, 2, 3].valueOf() 转换失败（输出原数组），再[1, 2, 3].toString() 转为字符串
// console.log(4 + [1, 2, 3]); // "41,2,3"

// console.log('a' + +'b'); // "aNaN" NaN 属性用于引用特殊的非数字值。
// 'a'+ +'b' 等于 'a'+ (+ 'b')
//   + 'b'等于 NaN

let a = {
  name: 'wn',
}
console.log(4 * a);

