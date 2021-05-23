let arr = [5, 3, 2, 4, 1, 0];
function bubble(arr) {
  const { length } = arr;
  // 有几个数外层循环就要遍历几次
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubble(arr));
