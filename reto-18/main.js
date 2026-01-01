/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourInARow(board) {
  const rows = board.length
  const cols = board[0].length

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const color = board[r][c]
      if (color === '.') continue

      if (
        c + 3 < cols &&
        board[r][c + 1] === color &&
        board[r][c + 2] === color &&
        board[r][c + 3] === color
      ) return true

      if (
        r + 3 < rows &&
        board[r + 1][c] === color &&
        board[r + 2][c] === color &&
        board[r + 3][c] === color
      ) return true

      if (
        r + 3 < rows && c + 3 < cols &&
        board[r + 1][c + 1] === color &&
        board[r + 2][c + 2] === color &&
        board[r + 3][c + 3] === color
      ) return true

      if (
        r + 3 < rows && c - 3 >= 0 &&
        board[r + 1][c - 1] === color &&
        board[r + 2][c - 2] === color &&
        board[r + 3][c - 3] === color
      ) return true
    }
  }

  return false
}

console.log(hasFourInARow([
  ['R', '.', '.', '.'],
  ['.', 'R', '.', '.'],
  ['.', '.', 'R', '.'],
  ['.', '.', '.', 'R']
]))

console.log(hasFourInARow([
  ['.', '.', '.', 'G'],
  ['.', '.', 'G', '.'],
  ['.', 'G', '.', '.'],
  ['G', '.', '.', '.']
]))

console.log(hasFourInARow([
  ['R', 'R', 'R', 'R'],
  ['G', 'G', '.', '.'],
  ['.', '.', '.', '.'],
  ['.', '.', '.', '.']
]))

console.log(hasFourInARow([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]))