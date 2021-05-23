// insert
function insertSort(arr) {
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] >= temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

}

var getLeastNumbers = function (nums, k) {
  insertSort(nums)
  return nums.slice(0, k);
};
console.log(getLeastNumbers([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
