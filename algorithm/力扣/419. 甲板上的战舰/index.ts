function countBattleships(board: string[][]): number {
  let count = 0
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[0].length; row++) {
      if (board[col][row] === 'X') {
        board[col][row] = '.'
        count++
        BFC(row, col)
      }
    }
  }
  function BFC(row: number, col: number,) {
    function BFCROW(row: number, col: number,) {
      if (board[col][row + 1] === 'X') {
        board[col][row + 1] === '.'
        BFCROW(row, col)
      }
    }
    function BFCCOL(row: number, col: number,) {
      if (board[col + 1] && board[col + 1][row] === 'X') {
        board[col + 1][row] === '.'
        BFCCOL(row, col)
      }
    }
    BFCROW(row, col)
    BFCCOL(row, col)

  }
  return count
};