/*function radix_sort(arr) {
  const len = arr.length;
  let unitArr = new Array(10);

  for (let i = 0; i < len; i++) {
    let unit = arr[i] % 10;
    if (unitArr[unit] === undefined) {
      unitArr[unit] = [];
      unitArr[unit].push(arr[i]);
    } else {
      unitArr[unit].push(arr[i]);
    }
  }
  unitArr.flat()
  console.log(unitArr);

  // let tenArr = new Array(10);
  // for (let i = 0; i < len; i++) {
  //   if (tenArr[i] === undefined) {
  //     tenArr[i] = [];
  //     unitArr[unit].push(arr[i]);
  //   } else {
  //     unitArr[unit].push(arr[i]);
  //   }
  // }
}*/

// 基数排序

/* 
  前置知识：
    1. 求个位： x / 1 % 10
    2. 求十位： x / 10 % 10
    3. 求百位： x / 100 % 10
*/
/*
  本质是利用位数的差距来排序的，由低位到高位，重复排序
  由于百位 > 十位 > 个位
  所以低位排序完后，只需要将排序好的低位数组根据高位来循环排序即可得到有序数组
  流程：
    1. 根据数组中的最大数来设置要遍历几轮，如果是十位，遍历两轮，百位遍历三轮
    2. 以个位数为桶，用计数排序排一次，得到个位数数组
    3. 以十位数为桶，将个位数数组用计数排序排一次，得到十位数数组
    3. 如果最大数的位数只有十位则排序结束，结束循环
    4. 否则直到循环最大数的最大位次为止
*/
const countingSort = (arr, place) => {
  // place为具体的位数（个位，十位，百位等等）
  // 1代表个位，10代表10位，100代表百位，以此类推
  let length = arr.length;
  let count = new Array(length).fill(0);

  // 根据place位，将arr[i]放入place位是桶arr[i] / place % 10的桶里面, 进行计数
  // 例如6，求6的个位位于几号桶，如果要求的是个位，那么求得其个位数为6，所以6位于6号桶
  for (let i = 0; i < length; i++) {
    let index = parseInt(arr[i] / place);
    count[index % 10]++;
  }
  // 对所有的计数进行累加
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  // 倒序输出到新的里列表里
  let output = new Array(length);
  for (let i = length - 1; i >= 0; i--) {
    let index = parseInt(arr[i] / place);
    output[count[index % 10] - 1] = arr[i];
    count[index % 10]--;
  }
  return output;
};
const redixSort = (arr) => {
  // 求出几位数
  let max = Math.max(...arr);
  let place = 1;
  while (parseInt(max / place) > 0) {
    arr = countingSort(arr, place);
    // console.log(arr);
    place *= 10;
  }
  return arr;
};
let a = [27, 21, 33, 14, 18, 11, 9, 17, 19, 20];
console.log(redixSort(a));
// radix_sort([48, 50, 19, 46, 24, 37, 58, 64, 29, 6]);
