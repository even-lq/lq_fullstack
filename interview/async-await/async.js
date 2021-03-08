function getJson() { // 异步函数
  return 'JSON'
}

async function testAsync() { // 声明异步，函数内部存在异步操作
  // try {
  //   await getJson() // 等待await声明的异步函数执行完后执行
  // } catch (error) {
  //   console.log(error);
  // }

  return 'hello' // async返回的promise状态变成resolve
  //...
}