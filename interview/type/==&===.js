// 双等：判断两者类型是否相同{
// 以 1 == `1` 为例
//   相同：Number比大小，string直接比
//   不同：类型转换 {
//     1. 先判断两者是否是null和undefined，是则返回true
//     2. 再判断一方是否为Boolean，是则把boolean转为number
//     3. 判断两者是否是string和number，是则把string转为number进行判断
//     （与四则运算的规则相同（除了加法））
//     4. 判断一方是否为object，且另一方是string,number,Symbol
//        是则把object转为原始类型再进行判断(如果两个引用类型比较大小也是该方法)
//  }
// }
console.log(1 == `1`);
// 三等：判断两者类型是否相同{
//   相同：比大小
//   不同：false
// }
console.log(1 === `1`);
console.log('a' == 'a');
console.log('a' == true);

// 1、如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——false转换为0，而true转换为1；
// 2、如果一个操作数是对象，另一个操作数不是，则调用对象的valueOf()方法，用得到的基本类型值按照前面的规则进行比较
// 3、如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值
 
[] == ![] // true
// !的优先级大于==，先转![]，
// !可将变量转换成boolean类型， null、 undefined、 NaN以及空字符串(")取反都为true,其余都为false。
// 所以![]运算后的结果就是false
// 于是 [] == false
// 所以 ![]是false，[] == false ->  [] == 0  ->  '' == 0  -> 0 == 0  -> true
// 结果就是true


// [] == [] // false
// 引用类型判断内存地址（指针）
