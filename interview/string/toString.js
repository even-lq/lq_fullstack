// . 会优先被识别为数字运算符然后才是对象运算符
// 3.toString() => (3.)toString() // error
// 3..toString() => (3.).toString() // '3'
// 3...toString() => (3.)..toString() // error
