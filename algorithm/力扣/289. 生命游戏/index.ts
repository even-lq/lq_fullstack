function gameOfLife(board: number[][]) {
  let result: number[][] = []
  function liveNumber(i: number, j: number) {
    let key = 0
    if (board[i][j - 1]) key++
    if (board[i][j + 1]) key++
    if (board[i - 1]) {
      if (board[i - 1][j]) key++
      if (board[i - 1][j + 1]) key++
      if (board[i - 1][j - 1]) key++
    }
    if (board[i + 1]) {
      if (board[i + 1][j]) key++
      if (board[i + 1][j + 1]) key++
      if (board[i + 1][j - 1]) key++
    }
    return key
  }
  board.forEach((row, i) => {
    row.forEach((col, j) => {
      result[i] || (result[i] = [])
      if (liveNumber(i, j) >= 4 || liveNumber(i, j) < 2) result[i][j] = 0
      else if (liveNumber(i, j) === 3) {
        result[i][j] = 1
      } else {
        result[i][j] = col
      }
    })
  })
  return result
};

console.log(gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 1]]
));
