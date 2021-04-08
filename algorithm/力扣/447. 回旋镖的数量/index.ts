function numberOfBoomerangs (points: number[][]): number {
  points.sort(
    (a, b) => (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
  )
  let res = 0
  console.log(points)
  for (let i = 0; i < points.length; i++) {
    let l = 0
    let r = points.length - 1
    console.log(points)
    while (l < i && r > i) {
      //   console.log(l)
      let diffR =
        (points[i][0] - points[l][0]) * (points[i][0] - points[l][0]) +
        (points[i][1] - points[l][1]) * (points[i][1] - points[l][1])
      let diffL =
        (points[i][0] - points[r][0]) * (points[i][0] - points[r][0]) +
        (points[i][1] - points[r][1]) * (points[i][1] - points[r][1])
      if (diffL === diffR) {
        l++
        r--
        res += 2
      }
      if (diffL < diffR) r--
      if (diffL > diffR) l++
    }
  }
  return res
}
console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ])
)
