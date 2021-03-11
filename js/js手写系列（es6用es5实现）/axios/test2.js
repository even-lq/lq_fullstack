let promise = Promise.resolve({
  name: '123',
  age: '15'
})
console.log(promise);
promise = promise.then(function (config) {
  // console.log(config);
  // Promise.resolve({
  //   name: '123',
  //   age: '16'
  // })
  // return config
  return Promise.resolve({
    name: '123',
    age: '16'
  })
})
console.log(promise);