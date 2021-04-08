function merge(intervals: number[][]): number[][] {
  let queue: number[][] = []
  let cur: number[] = []
  intervals.sort((a, b) => a[0] = b[0])
  for (let col = 0; col < intervals.length; col++) {
    if (!intervals[col - 1]) {
      cur = intervals[col]
    }
    if (intervals[col][0] > cur[1]) {
      queue.push(cur)
      cur = intervals[col]
    } else {
      cur[1] = Math.max(cur[1], intervals[col][0])
    }
  }
  return queue
};