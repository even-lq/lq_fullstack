// 开始： 0 ~ len - 1 => i === j
function cb(a, b) {
  return b - a
}
function partition(arr, left, right) {
  // 结束递归条件
  if (left >= right) return;
  // 取基准值
  let pivot = arr[left];
  let i = left, j = right;
  while(i < j) {
    // 在右边找到 < pivot
    // 在左边找到 > pivot
    // ↓
    // 降序
    while (cb(arr[j], pivot) >= 0 && i < j) {
      j --;
    }
    arr[i] = arr[j]
    while (cb(arr[i], pivot) <= 0 && i < j) {
      i++;
    }
    arr[j] = arr[i];
  }
  // i === j 基准值位置
  arr[i] = pivot 
  partition(arr, left, i - 1);
  partition(arr, i + 1, right);
}

function sort(arr) {
  partition(arr, 0, arr.length - 1)
  return arr;
}
console.log(sort([-1 ,-2, -4, 6, 9, -9]));

// 依据对象属性给对象排序
let arr2 = [{age: 18}, {age: 19}, {age: 1}]
arr2.sort((a, b) => {
  return a.age - b.age
})