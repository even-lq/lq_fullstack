// . 会优先被识别为数字运算符然后才是对象运算符
// 3.toString() => (3.)toString() // error
// 3..toString() => (3.).toString() // '3'
// 3...toString() => (3.)..toString() // error

// 新知识点：
// 字符串通过下标只能读，不能写
// 比如let a = 'size'
// 我们可以通过a[0]去到's'，但不能a[0] = 'b' 去修改字符串


// forin遍历会遍历空字符串