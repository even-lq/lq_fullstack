// 给定一串版本号，为其排序
// let b = ['2.3.4', '2.3.5', '2.3.4.1', '11.9']

let arr = [0, 1, 2, 3, 9, -1]
// 比较两个数的差 由差来决定顺序
// arr.sort() 从小到大
arr.sort((a, b) => b - a) // 从大到小
console.log(arr);
// 按位对齐比较
function compare(str1, str2) {
  let arr1 = str1.split('.');
  let arr2 = str2.split('.');

  let len = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < len; i++) {
    let a = arr1[i] ? arr1[i] : 0;
    let b = arr2[i] ? arr2[i] : 0;
    a = Number(a);
    b = Number(b);
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
  }
  return 0;
}

console.log(compare('2.3.4', '2.3.5'));
