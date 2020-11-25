// promise
// function a() {
//   setTimeout(() => {
//     console.log('aaaa');
//   }, 1000);
// }

// function b() {
//   console.log('bbb');
// }

// a()
// b()
// 先执行b在执行a

function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaaa');
      resolve('aaaa');
    }, 1000);
  })
}

function b() {
  console.log('bbb');
}

a()
  .then(b)
// 先执行b在执行a

