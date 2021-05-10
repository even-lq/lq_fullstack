const promise = new Promise((resolve, rejected) => {
  throw new Error("test");
});
//此时只有then的第二个参数可以捕获到Promise内部抛出的错误信息
promise
  .then(
    (res) => {
      throw new Error("hello1");
    },
    (err) => {
      throw new Error("hello1");
      // console.log(err);
    }
  )
  .then(
    (res) => {
      throw new Error("hello");
    },
    (err) => {
      console.log(err, '鬼地方鬼地方');
    }
  );
