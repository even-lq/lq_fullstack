function numIslands (grid: string[][]): number {
  let res = 0
  let grid1 = JSON.parse(JSON.stringify(grid))

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        res++
      }
      if (grid1[i][j] === '1') {
        grid[i][j - 1] && (grid[i][j - 1] = '0')
        grid[i][j + 1] && (grid[i][j + 1] = '0')
        grid[i - 1] && grid[i - 1][j] && (grid[i - 1][j] = '0')
        grid[i + 1] && grid[i + 1][j] && (grid[i + 1][j] = '0')
        grid[i][j] === '0'
      }
    }
  }

  return res
}

console.log(
  numIslands([
    ['1', '1', '1'],
    ['0', '1', '0'],
    ['1', '1', '1']
  ])
)
