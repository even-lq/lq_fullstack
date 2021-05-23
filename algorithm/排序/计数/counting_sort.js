const countingSort = arr => {
  const {length} = arr
  if (length <= 1) {
    return;
  }
  let count = new Array(Math.max(...arr) + 1).fill(0)
  for (let i = 0; i < length; i++) {
    count[arr[i]]++;
  }
  console.log(count);

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }

  let output = new Array(length);
  // 为什么从后往前插?
  // 从后往前不会改变元素的相对位置，属于稳定的排序
  // 而从前往后会改变元素的相对位置，属于不稳定的排序，比如下面的例子的[2, 3, 2, 2, 100]中，第一个2会变成所有2的最后一个
  for (let i = 0; i < length; i++) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  return output;
}
let arr = [2, 3, 2, 2, 100]
// let newArr = countingSort(arr)
console.log(countingSort(arr));