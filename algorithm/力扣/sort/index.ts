function sort(arr: string[][]) {
  let res: string[] = []
  let len = arr.length
  function back(str: string, index: number) {
    if (str.length === len) {
      res.push(str)
      return
    }
    for (let item of arr[index]) {
      back(str + item, index + 1)
    }
  }
  back('', 0)
  return res
}

console.log(sort([['', 'b'], ['n', 'm'], ['0', '1']]));
