const MyPromise = require("./class-link-myPromise");

const promise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  // resolve("success");
  // }, 2000);
  // reject("err");
  throw new Error('err')
});

// 1.
/*promise.then(
  (res) => {
    console.log('resolve', res);
  },
  (reason) => {
    console.log("reject", reason);
  }
);*/

//2.
/*promise.then((value) => {
  console.log(1);
  console.log("resolve", value);
});

promise.then((value) => {
  console.log(2);
  console.log("resolve", value);
});

promise.then((value) => {
  console.log(3);
  console.log("resolve", value);
});*/

// 3.
/*function other() {
  return new MyPromise((resolve, reject) => {
    resolve("success");
  });
}

promise
  .then((res) => {
    console.log(1);
    console.log("resolve", res);
    return other();
  })
  .then((res) => {
    console.log(2);
    console.log("resolve", res);
  });*/

// 4.
// 这个时候将promise定义一个p1，然后返回的时候返回p1这个promise
/*const p1 = promise.then((value) => {
  console.log(1);
  console.log("resolve", value);
  return p1;
});
// 运行的时候会走reject
p1.then(
  (value) => {
    console.log(2);
    console.log("resolve", value);
  },
  (reason) => {
    console.log(3);
    console.log(reason.message);
  }
);*/

// 5.
promise.then(value => {
  console.log(1)
  console.log('resolve', value)
}, reason => {
  console.log(2)
  console.log(reason.message)
})

