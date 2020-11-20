// let obj = {
//   name: 'wn'
// }
// // 变量obj存放对象{ name: 'wn}的地址
// const a = [] // 常量a的值存放空数组的地址
// const b = a // 常量b复制了a的值
// // 所以a和b指向同一个地址，也就是指向了同一个空数组
// b.push(1)
// console.log(a); // 1



function test(person) {
  person.age = 26
  person = {
    name: 'yyy',
    age: 30
  }

  return person
}

const p1 = {
  name: 'xxx',
  age: 25
}

const p2 = test(p1)
console.log(p1); /// xxx 26
console.log(p2); // yyy 30 

// 1. 以上函数传递的形参是传递对象指针（实参）的一个副本
// 2. p1 和 person 指向的是相同的地址，所以person.age被修改，p1.age也会被修改
// 3. person重新指向了一块新的内存地址 { name: 'yyy', age: 30}