// arguments => 类数组
// 类数组 VS 数组
// 1）拥有length属性，其它属性（索引）为非负整数（对象中的索引会被当做字符串来处理）;
// 2）不具有数组所具有的方法；
// 类数组是一个普通对象，而真实的数组是Array类型。
// 常见的类数组有: 函数的参数 arguments, DOM 对象列表(比如通过 document.querySelectorAll 得到的列表), jQuery 对象(比如 $(“div”)).
// 类数组可以转换为数组:

function sidEffecting(ary) {
  ary[0] = ary[2]
}

function bar(a, b, c) { // 1 1 1
  c = 10 // 1 1 10
  sidEffecting(arguments) // arguments 就是 a，b，c 参数变量和arguments是双向绑定的
  // 所以改了arguments就改了a，b，c
  // [10, 1, 10]
  return a + b + c
}

console.log(bar(1, 1, 1)); // 21