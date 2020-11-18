// js是单线程语言

function a() {
  setTimeout(() => {
    console.log('wb');
  }, 1000)
}

function b() {
  console.log('lq');
}

function c() {
  console.log('tt');
}

a()
b()
c()
// 代码从上往下执行，同步执行
// 同步执行完再执行异步