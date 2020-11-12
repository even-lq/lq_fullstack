// 原始值不能有属性和方法，属性和方法是对象独有的
// var num = 123
// num.abc = 'aaa'
// console.log(num);

// 实质
// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num.abc);
// console.log(num * 2);

// Number { 123, abc: "aaa" }
// abc: "aaa"
// __proto__: Number
// [[PrimitiveValue]]: 123

// Number对象 num参与运算时是基本类型，不参与运算时可以当对象用
// 字符串同理 null和undefined不行


// var str = 'abc'
// console.log(str.length);


var num = 4
//1. new Number(4).len = 3
//2. delete num.len
//3. 当访问num.len时又会创建num.lum = undefined
// 以上该隐式的过程叫做包装类
num.len = 3
console.log(num.len);


var arr = [1, 2, 3, 4, 5]
arr.length = 2
console.log(arr); // [1, 2]


var str = 'abcd'
str.length = 2
// new String('abcd').length = 2
// delete str.length
console.log(str); // abcd
// 因为str的yuanx String对象有length属性，所以不会打印undefined
console.log(str.length); // new String('abcd').length 


//  面试题：包装类
var str = 'abc'
str += 1  // 'abc1'
var test = typeof (str)
if (test.lenth == 6) {
  test.sign = 'typeOf的返回结果可能是String'
}
console.log(test.sign);// undefined