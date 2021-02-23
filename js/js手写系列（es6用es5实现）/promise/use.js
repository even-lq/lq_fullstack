function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaa');
      resolve('ok')
    }, 1000);
  })

}

// 即使不设置时间也是异步
function b() {
  setTimeout(() => {
    console.log('bbb');
  });
}

// a()
// b()

a().then(b)