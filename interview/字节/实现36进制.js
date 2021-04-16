// 写好类似leetcode函数，测试用例，用例结果。

function scale36(n) {
  // 36 0-9，a-z
  // 单独的功能函数
  const arr = []
  var nums36 = getNums36()
  // 36 10
  while (n) {
    var res = n % 36; // 余数：就是需要的值
    arr.unshift(nums36[res]);
    // 进位：逢36进1
    n = parseInt(n / 36) // 商：进位值
  }
  return arr.join('')

}
function getNums36() {
  var nums36 = [];
  for (var i = 0; i < 36; i++) {
    if (i >= 0 && i <= 9) {
      nums36.push(i)
    } else {
      // 静态 String.fromCharCode() 方法返回由指定的 UTF - 16 代码单元序列创建的字符串。
      nums36.push(String.fromCharCode(i + 87))
    }
    
  }
  // console.log(nums36, '----------------');
  return nums36
}
console.log(scale36(37));