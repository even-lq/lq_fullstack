function threeSum(num: number[]): number[][] {
  num.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < num.length; i++) {
    let R = num.length - 1
    let L = i + 1
    if (num[i] > 0) return result
    if (num[i] === num[i - 1]) continue
    while (L < R) {
      const sum = num[i] + num[L] + num[R]
      if (sum === 0) {
        result.push([num[i], num[L], num[R]])
        while (L < R && num[L] === num[L + 1]) L++
        while (L < R && num[R] === num[R - 1]) R--
        L++
        R--
      }
      else if (sum > 0) { R-- }
      else {
        L++
      }
    }
  }
};
