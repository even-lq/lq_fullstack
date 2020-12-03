// 数组去重
let arr = [1, 2, 3, 4, 1]

let newArr = [...new Set(arr)]
console.log(newArr);

// 查找水果的三种方式
// 1
// function test(color) {
//   switch (color) {
//     case 'red':
//       return ['apple', 'strawberry']
//     case 'yellow':
//       return ['banana', 'pear']
//     case 'green':
//       return ['watermelon']
//     default:
//       return []
//   }
// }
// console.log(test('green'));

// 2
// const fruitCoolor = {
//   red: ['apple', 'strawberry'],
//   yellow: ['banana', 'pear'],
//   green: ['watermelon']
// }
// function test(color) {
//   return fruitCoolor[color] || []  // 对象获取属性也可以用[]
// }
// console.log(test('yellow'));

// let obj = new Object()
// let a = 1 
// obj.a = 123 // 隐式转换：obj.a = 123 ==> obj.'a' = 123
// console.log(obj.a); // 如果不给obj.a赋值，obj.a打印undefined

// 对比对象的优势
// 1. map可以将基本类型作为key值
// 2. 代码易维护
// 3. 查询效率高 时间复杂度都只有O(1)
let obj = new Map()
let a = 1
obj.set(1, 123)
console.log(obj.get(1));

const fruitColor = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pear'])
function test(color) {
  return fruitColor.get(color)  // 对象获取属性也可以用[]
}
console.log(test('yellow'));


