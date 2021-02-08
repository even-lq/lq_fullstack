// concat 原始类型深拷贝
// let arr = ['old', 1, true, null, undefined]
// let new_arr = arr.concat()
// arr[0] = 'new'
// console.log(new_arr); // ['old', 1, true, null, undefined]
// console.log(arr); // ['new', 1, true, null, undefined]

// // concat 引用类型浅拷贝
// let arr1 = [{old: 'old'}, 1, true, null, undefined]
// let new_arr1 = arr1.concat()
// arr1[0].old = 'new'
// console.log(new_arr1); // [ { old: 'new' }, 1, true, null, undefined ]
// console.log(arr1); // [ { old: 'new' }, 1, true, null, undefined ]


// slice也同concat

// JSON法：
// 缺点： 1. 不能识别undefined 2. 不能拷贝函数
let arr2 = [{ old: 'old' }, 1, true, null, undefined]
let new_arr2 = JSON.parse(JSON.stringify(arr2))
arr2[0].old = 'new'
console.log(new_arr2); // [ { old: 'new' }, 1, true, null, undefined ]

let arr3 = [function() {
  console.log(123);
}, {
  b:function() {
    console.log(456);
  }
}]
let new_arr3  = JSON.parse(JSON.stringify(arr3))
console.log(new_arr3); // [ null, {} ]
