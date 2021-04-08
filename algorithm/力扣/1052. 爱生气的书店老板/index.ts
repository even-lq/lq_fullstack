function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
  let max = 0
  let i = 0
  for (let i = 0; i < grumpy.length; i++) {
    if (grumpy[i] === 1) {
      let max2 = customers.slice(i, i + X).reduce((a, b) => a + b, 0)
      if ()
    }
  }
};