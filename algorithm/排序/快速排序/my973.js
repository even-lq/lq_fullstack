var kClosest = function (points, K) {
  if (points.length === K) {
    return points
  }
  quickStart(points, 0, points.length - 1, K)
  return points.slice(0, K)
};

function distance(points) {
  return points[0] * points[0] + points[1] * points[1] 
}

function quickStart(arr, left, right, k) {
  let i = left, j = right
  let pivot = distance(arr[left])
  while (i < j) {
    if (distance(arr[i]) <= pivot) {
      i++;
      continue;
    }
    if (distance(arr[j]) > pivot) {
      j--;
      continue;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  [arr[left], arr[j]] = [arr[j], arr[left]]
  if (j === k) {
    return;
  } else if (j < k) {
    quickStart(arr, j + 1, right, k)
  } else {
    quickStart(arr, left, j - 1, k)
  }
}

console.log(kClosest([[1, 3], [-2, 2]], 1));
