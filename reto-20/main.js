/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  const result = warehouse.map(row => [...row])
  const rows = result.length

  for (const col of drops) {
    for (let row = rows - 1; row >= 0; row--) {
      if (result[row][col] === '.') {
        result[row][col] = '#'
        break
      }
    }
  }

  return result
}

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
))

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
))

console.log(dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
))

console.log(dropGifts(
  [
    ['#', '#'],
    ['#', '#']
  ],
  [0, 0]
))
