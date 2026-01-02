/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
    const result = warehouse.map(row => [...row])
    const rows = result.length
    const cols = result[0].length

    const dropGift = col => {
        for (let r = rows - 1; r >= 0; r--) {
            if (result[r][col] === '.') {
                result[r][col] = '#'
                return
            }
        }
    }

    const clearFullRows = () => {
        for (let r = rows - 1; r >= 0; r--) {
            if (result[r].every(cell => cell === '#')) {
                result.splice(r, 1)
                result.unshift(Array(cols).fill('.'))
            }
        }
    }

    for (const col of drops) {
        dropGift(col)
        clearFullRows()
    }

    return result
}

console.log(clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
))

console.log(clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
))