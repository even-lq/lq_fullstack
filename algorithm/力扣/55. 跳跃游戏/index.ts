function canJump(num: number[]): boolean {
  for (let i = 0, max = 0; i < num.length; i++) {
    if (i <= max) max = Math.max(max, i + num[i])
    else return false
  }
  return true
};


