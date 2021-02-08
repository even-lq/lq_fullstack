let a = 1
let b = a
a = 2
console.log(b); // 1
// 内存地址没变
// a和b都指向1，之后a发生改变指向了2


let c = {
  name: '酒神',
}
let d = c
c.name = 'aaa'
console.log(d); // { name: 'aaa' }