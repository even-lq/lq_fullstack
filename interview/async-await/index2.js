function getJson() {
  // 如果getJson是纯异步函数而不返回promise则不保证异步会屡成同步，打印3 2
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(2);
      resolve(333)
    }, 2000)
  })
}
async function testAsync() {
  let data = await getJson()
  console.log(3);
  console.log(data);
}

// 翻译结果
function testAsync() {
  return Promise().resolve().then(function () {
    return getJson()
  }).then((res) => {
    let data = res
    console.log(3);
    console.log(data);
  })
}
testAsync() // 2 3 333
