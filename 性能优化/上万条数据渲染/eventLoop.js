console.log('script start');

setTimeout(function () {
  console.log('timeout1');
}, 10);

new Promise(resolve => {
  console.log('promise1');
  resolve();
  setTimeout(() => {
    console.log('timeout2')
    setTimeout(() => {
      console.log('timeout3')
    }, 10);
  }, 10);
}).then(function () {
  console.log('then1')
})

console.log('script end');