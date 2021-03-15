// 奇
function isOdd(num) {
  return num % 2 == 1
}

// 偶数
function isEven(num) {
  return num % 2 == 0
}

function isSance(num) {
  return isEven(num) || isOdd(num)
}

var values = [7, 4, '13', -9, Infinity]
values.map(isSance) // [true true true false NaN]
// -9 % 2 = -1 把负号给1
//  取模的NaN

