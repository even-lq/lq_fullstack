var a = 0
var b = async () => {
  a = a + await 10
  console.log(a, '2'); // 第二个执行：18  await 内部实现了generators，generators会保留堆和栈中的东西（深拷贝），所以a = 0被保留
  // await是异步操作，遇到await就会立即返回一个pending状态的promise，将保存下来的值拿出来使用 

  a = (await 10) + a
  console.log(a, '3'); // 第三个执行：28
}
b()
a++
console.log(a, '1'); // 第一个执行：1 // 先执行同步