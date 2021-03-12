// 判断一个值是否是水仙花数
function a(n) {
  var a = n / 100
  var b = (n - a * 100) / 10;
  var c = n % 10;
  if (n == a * a * a + b * b * b + c * c * c) {
    console.log(n + '是水仙花数');
  } else {
    console.log(n + '不是水仙花数');

  }
}
a(123)
a(456)