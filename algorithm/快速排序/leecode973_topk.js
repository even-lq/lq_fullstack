function partition(arr, left, right) {
  //  arr = arr.map((item) => {
  //   return Math.sqrt(Math.pow(item[0], 2) + Math.pow(item[1], 2))
  // })
  let i = left, j = right;
  let pivot = arr[i]
  let pivot_temp = Math.sqrt(Math.pow(arr[i][0], 2) + Math.pow(arr[i][1], 2))
  while (i < j) {
    while (Math.sqrt(Math.pow(arr[j][0], 2) + Math.pow(arr[j][1], 2)) <= pivot_temp && i < j) {
      j--;
    }
    arr[i] = arr[j]
    while (Math.sqrt(Math.pow(arr[i][0], 2) + Math.pow(arr[i][1], 2)) >= pivot_temp && i < j) {
      i++;
    }
    arr[j] = arr[i]
  }
  arr[i] = pivot;
  return i;
}
var kClosest = function (points, K) {
  let left = 0;
  let right = points.length - 1;
  let target = points.length - K;
  let minPoints = []
  let i = partition(points, left, right)
  while (i != target) {
    if (i < target) {
      left = i + 1
    } else {
      right = i - 1
    }
    i = partition(points, left, right)
  }
  for (let index = i; index < points.length; index++) {
    minPoints.push(points[index])
  }
  console.log(minPoints);
  return minPoints;
};
kClosest([[3, 3], [5, -1], [-2, 4]], 2);

// target = 4
// [3, 2, 1, 5, 6, 4]
