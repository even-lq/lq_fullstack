function trap(height: number[]): number {
  let res = 0
  let stack: number[] = []
  for (let i = 0; i < height.length; i++) {
    if (!stack.length) {
      stack.push(height[i])
    } else {
      while (stack.length && height[i] < stack[stack.length - 1]) {
        stack.push()
      }
    }
  }
  return res
};