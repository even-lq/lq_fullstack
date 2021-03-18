function partition(arr, left, right) {
  let pivot = arr[Math.floor(Math.random() * (right - left + 1)) + left][0],
    i = left, j = right;

  while (i < j) {
    while (arr[i][0] < pivot) {
      i++;
    }

    while (arr[j][0] > pivot) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    if (equal(arr[i], arr[j]) && i !== j) {
      i++
    }

  }
  return i
}

function equal(arr1, arr2) {
  return arr1[0] === arr2[0] ? true : false
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return
  }

  let index = partition(arr, left, right)

  quickSort(arr, left, index - 1)
  quickSort(arr, index + 1, right)

  console.log(arr);
}



// console.log([[1, 9], [2, 5], [19, 20], [10, 11], [12, 20], [0, 3], [0, 1], [0, 2]], 0, 7);
// quickSort([[1, 3], [2, 6], [8, 10], [15, 18], [0, 5], [0, 2], [3, 8], [4, 7]], 0, 7)
quickSort([[1, 3], [2, 6], [8, 10], [15, 18], [0, 5], [0, 2], [3, 8], [4, 7]], 0, 7)


