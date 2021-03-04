// const arr = [1, 2, 3, 4]

// const arr = new Array()
// // 等同于
// const arr = []

// const arr = new Array(7).fill(1) // length === 7
// console.log(arr);

// const arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]

// 矩阵
// 初始化二维数组
// fill的入参的如果是引用类型，那么它在填充值的时候就是入参的引用
// 也就是说它的所有值都是入参的引用，不管有多少个值，其实都只有一个，也就是入参
// const arr = (new Array(7).fill([]))
// arr[0][0] = 1
// console.log(arr);


const arr = new Array(7)
const len = arr.length
for (leti = 0; i < lsen; i++) {
  arr[i] = []
}
