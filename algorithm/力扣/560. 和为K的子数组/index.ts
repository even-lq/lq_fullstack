function subarraySum(nums: number[], k: number): number {
  let stack: number[] = []
  let res = 0
  nums.forEach((i, index) => {
    stack.push(i)
    let tempStack = [...stack]
    if (i === k) res++
    while (index) {

      let temp = i + tempStack[tempStack.length - index - 1]
      if (temp === k) res++
      stack.push(temp)
      index--
    }


  })
  console.log(stack);
  return res

};

console.log(subarraySum([1, 2, 1, -1, 2, 2, 1, 2, 1, 1], 2));
