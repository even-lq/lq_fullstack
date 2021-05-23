// 使用遍历器(forEach)操作数组下标的时候注意不要用下标修改数组
// 否则数组的下标会不准确

// 用for循环可以解决

// 牛客前端大挑战
/*function removeWithoutCopy(arr, item) {
  for (let i in arr) {
    console.log(i);
    while (arr[i] === item) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2);*/


// 数组深拷贝
// 1. ES6 [...]扩展运算符
// 2. concat [].concant(arr.push(item))
function append(arr, item) {
  // let newArr = [...arr]

  // 不能使用[].concat(arr).push(item)，会返回数组的长度
  let newArr = [].concat(arr);
  newArr.push(item);
  return newArr;
}
console.log(append([1, 2, 3, 4], 10));