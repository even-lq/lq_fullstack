function dailyTemperatures(T: number[]): number[] {
  let stack = []
  let res = []
  for (let i = T.length - 1; i >= 0; i--) {

    // /console.log(T[i], T[stack[stack.length - 1]]);

    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop()
    }

    if (stack.length) {
      res[i] = stack[stack.length - 1] - i
    } else {
      res[i] = 0
    }

    stack.push(i)
  }
  return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
