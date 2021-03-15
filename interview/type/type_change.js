// 对象类型转原始类型
// let obj = {
//   name: 'wn'
// }
// console.log(obj.toString());

// console.log([].valueOf()); // []
// console.log([].valueOf().toString()); // ""
// console.log([].toString()); // ""



var a = [0]
if ([0]) {
  console.log(a == true);
} else {
  console.log('hello');
}
// [] => true, 0
// [0] => true, 0
// [1] => true, 1
// [0] == true  => 0 == 1


// '5' + 3 = ? // 53
// '5' - 3 = ? // 2 减号要求两边的操作数是数字，所以会强转


// 1 + - + + + - + 1 = ？ // 2
// + 1 = 1
// - 1 = -1

// + - 抵消
// 1 + + + 1
// 1 + + 1
// 1 + 1 = 2

// 1 + - + - + - + - - + - 1  = ？ // 2
// 1 - + - 1
// 1 - 0 + (-1) // 2




[1 < 2 < 3, 3 < 2 < 1] // [true, true]
// 转换步骤
1 < 2 // true
true < 3 
1 < 3 // true

3 < 2 // false
false < 1 
0 < 1 // true



// 判断一方是否为object，且另一方是string, number, Symbol
// 则把object转为原始类型再进行判断

// 对象转原始值
//   - 对象在类型转换时会调用内置的[[ToPrimitive]]
//   - 如果是基本类型，则不转换
//   - 调用 x.valueOf() ，如果转为基本类型，则返回值
//   - 否则调用jx.toString() ，如果转为基本类型，则返回值
//   - 否则报错

// [[[2]]].toString()
// "2" // 递归转字符串
// [1].toString()
// "1"

2 == [[[2]]] // true

