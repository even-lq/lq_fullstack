['1', '2', '3'].map(parseInt);
console.log(['1', '2', '3'].map(parseInt)); // [ 1, NaN, NaN ]


// 为什么？

// map => item, index, arr map有三个参数，第一个必选，二三可选
parseInt('1', 0) // 1  满足 第三种 情况
parseInt('2', 1) // NaN  没有1进制的2
parseInt('3', 2) // NaN  没有2进制的3

// parseInt 的第二个参数 radix：
// 从 2 到 36，表示字符串的基数。例如指定 16 表示被解析值是十六进制数。请注意，10不是默认值！
// parseInt('123', 5) // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38

// 如果 radix 是 undefined、0或未指定的，JavaScript会假定以下情况：

// 1. 如果输入的 string以 "0x"或 "0x"（一个0，后面是小写或大写的X）开头，那么radix被假定为16，字符串的其余部分被当做十六进制数去解析。
// 2. 如果输入的 string以 "0"（0）开头， radix被假定为8（八进制）或10（十进制）。具体选择哪一个radix取决于实现。ECMAScript 5 澄清了应该使用 10(十进制) ，但不是所有的浏览器都支持。因此，在使用 parseInt 时，一定要指定一个 radix。
// 3. 如果输入的 string 以任何其他值开头， radix 是 10(十进制) 。
// 4. 如果第一个字符不能转换为数字，parseInt会返回 NaN。

parseInt(3, 8) // 3 八进制的3就是十进制的3
parseInt(3, 2) // NaN  没有1进制的2
parseInt(3, 0) // 3 parseInt(3)
