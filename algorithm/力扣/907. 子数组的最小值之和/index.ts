var sumSubarrayMins = function (A) {
  const mod = 1e9 + 7
  let stack = []
  let tmp = 0, allCount = 0, sum = 0
  for (let i = 0; i < A.length; i++) {
    allCount = 1
    while (stack.length !== 0 && stack[stack.length - 1].val > A[i]) {
      let { count, val } = stack.pop()
      tmp -= count * val
      allCount += count
    }

    tmp += allCount * A[i]
    stack.push({
      val: A[i],
      count: allCount
    })

    sum += tmp

    sum %= mod
  }
  return sum
};


