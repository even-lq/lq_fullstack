let arr = [1, 2, 3]
arr.map((x, a) => { 
  return x + 1
})
const add1 = (x, a) => {
  console.log(x, a);
  return x + 1
}
// 无参风格
arr.map(add1)
 
// parseInt: 把 xx 进制的 字符串 转成 10进制 的 整型