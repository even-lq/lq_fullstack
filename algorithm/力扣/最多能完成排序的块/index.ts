const maxChunksToSorted = function (arr: number[]) {
  let anotherArr = [...arr]
  let maxNumber = arr[0]
  let resultNumber = 0
  let sortArr = anotherArr.sort((a, b) => a - b)
  console.log(sortArr);

  let min = sortArr[0]
  arr.forEach((i, index) => {
    if (i > maxNumber) maxNumber = i
    if (i === min) {
      resultNumber++
      min = sortArr[sortArr.indexOf(maxNumber) + 1]
      maxNumber = arr[index + 1]
    }
  })

  return resultNumber
};
console.log(maxChunksToSorted([2, 1, 3, 4, 4]));


