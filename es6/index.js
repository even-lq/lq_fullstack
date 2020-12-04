// console.log(foo); // undefined：声明提升
// var foo = 'bar'
// console.log(foo); // 报错：let 不会声明提升
// let foo = 'bar'

// const foo = 'bar'
// foo = 123
// console.log(foo); // 报错


// es6新增的数组的方法
let arr = ['a', 'b', 'c']
// console.log(Object.keys(arr)); // Object.keys可以被数组使用，获取键名(数组下标)，但是是String 类型
// let newArr = [...arr.keys()] // 解构由数组下标组成的数组迭代器
// console.log(newArr); // 返回由数组下标组成的数组，Number类型
// let iter = arr.entries() // 获取数组的键值对，返回类型是数组迭代器，返回的元素每一个都是一个数组，第0项是键名，第1项是键值
// for (let e of iter) {
//   console.log(e[0]);
// }

// let eArr = arr.values() // 返回数组所有的值
// for (let e of eArr) {
//   console.log(e);
// }

// 判断数组是否有指定值
// function test(fruit) {
//   const redFruits = ['apple', 'strawberry', 'cherry']
//   if (redFruits.includes(fruit)) {
//     console.log('red');
//   }
// }
// test('apple')

// 查找数组元素，查找成功则返回该元素，否则返回undefined
// 它的参数是一个函数，该函数决定查询条件
// let people = [
//   { name: 'xt', age: 18 },
//   { name: 'yz', age: 20 },
//   { name: 'dt', age: 20 }
// ]

// function findFriend(person) {
//   return person.name === 'yz' 
// }
// console.log(people.find(findFriend));
// console.log(people.find((person) => {
//   return person.name === 'xt'
// }));

let test = ['a', 'b', 'c', 'd']
console.log(test.findIndex((i) => {
  return i == 'b'
}));



