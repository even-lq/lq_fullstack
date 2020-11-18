 function xq() {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log('酒神相亲！');
       resolve('我会来娶你！')
      // reject('不喜欢')
     }, 1000)
   })
 }

 function marry() {
   return new Promise(resolve => {
     setTimeout(() => {
       console.log('结婚大吉');
       resolve(baby)
     }, 500)
   })
 }

 function baby() {
   console.log('小酒神出生');
 }

 xq()
  .then((res) => {
    console.log(res);
    return marry()
  })
  .then((res) => {
    res()
  })
  .catch((err) => {
    console.log(err);
  })
// xq()
// marry()
// 执行顺序相反，不符合要求