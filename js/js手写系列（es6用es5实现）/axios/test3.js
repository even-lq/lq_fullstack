let promise = Promise.resolve({
  name: '123',
  age: '15'
})
// promise = promise.then(function (config) {
//   setTimeout(() => {
//     console.log('b');
//   }, 100);
// }).then(() => {
//   console.log(123);
// })
promise = promise.then(function (config) {
  setTimeout(() => {
    console.log(config, 321);
  }, 100);
  return config
}).then((res) => {
  console.log(res);
})