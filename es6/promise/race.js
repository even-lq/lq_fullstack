function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('ok')
    }, 1000)
  })
}
function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('bbb');
      resolve('ok')
    }, 1500)
  })
}
function c() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('ccc');
      resolve('ok')
    }, 500)
  })
}
function d() {
  console.log('ddd');
}
// race：abc只要有一个执行完就执行d
// Promise.race([a(), b(), c()]).then(d)


// 无论成功失败都会走finally
a().then(b).then(c).finally(d)