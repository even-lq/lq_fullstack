// 调用栈溢出，爆栈

function division(a, b) {
  return division(a, b)
}
console.log(division(1, 2));
