function largestTriangleArea(points: number[][]): number {
  let max = 0
  for (let i = 0; i < points.length - 2; i++) {
    for (let j = i + 1; j < points.length - 1; j++) {
      for (let k = j + 1; k < points.length; k++) {
        let x1 = Math.abs((points[j][0] - points[i][0]) ** 2 + (points[j][1] - points[i][1]) ** 2)
        let x2 = Math.abs((points[k][0] - points[i][0]) ** 2 + (points[k][1] - points[i][1]) ** 2)
        let x3 = Math.abs((points[j][0] - points[k][0]) ** 2 + (points[j][1] - points[k][1]) ** 2)
        let p = (x1 + x2 + x3) / 2
        let sum = Math.abs(p * (p - x1) * (p - x2) * (p - x3))
        max = Math.max(max, sum)
      }
    }
  }
  return max
};