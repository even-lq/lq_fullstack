// async/await的原理是什么?把下面这段代码翻译成promise
function getJson() {
  // 如果getJson是纯异步函数而不返回promise则不保证异步会屡成同步，打印3 2
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      // resolve(2) // 不resolve则没有then，无法打印3
    }, 2000)
  })
}
async function testAsync() {
  await getJson()
  console.log(3);
}

// 翻译结果
// function testAsync() {
//   return Promise().resolve().then(function () {
//     return getJson()
//   }).then(function () {
//     console.log(3);
//   })
// }
testAsync()
