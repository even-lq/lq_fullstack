// 双等：判断两者类型是否相同{
// 以 1 == `1` 为例
//   相同：Number比大小，string直接比
//   不同：类型转换 {
//     1. 先判断两者是否是null和undefined，是则返回true
//     2. 再判断一方是否为Boolean，是则把boolean转为number
//     3. 判断两者是否是string和number，是则把string转为number进行判断
//     （与四则运算的规则相同（除了加法））
//     4. 判断一方是否为object，且另一方是string,number,Symbol
//        是则把object转为原始类型再进行判断  
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

[] == ![] // true
// 有感叹号转为Boolean，而[]转Boolean是true（JavaScript类型转换表格）
// 所以 ![]是false，[] == false ->  [] == 0  ->  '' == 0  -> 0 == 0  -> true
//结果就是true


// [] == [] // false
// 引用类型判断内存地址（指针）
