function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaa');
      resolve('我是a')
    }, 1000)
  })
}
function b() {
  setTimeout(() => {
    console.log('bbbb');
  }, 500)
}
function c() {
  setTimeout(() => {
    console.log('cccc');
  }, 100)
}

a().then((res) => {
  console.log(res);
  b()
  // 如果没有resolve或return则不能给下一个then
  return '我是a给你的值'
}).then((res) => {
  console.log(res);
  c()
})
