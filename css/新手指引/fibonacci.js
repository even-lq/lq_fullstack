// 斐波那契数列
function fib(n) {
  let arr = [0n, 1n]
  if (n <= 1) return arr[n]
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]    
  }
  console.log(arr);
}
fib(10000)


// 怎么求第一万项数据:超过Number的最大表达值
// 用数字+n：表示bigint