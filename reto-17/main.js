/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
    const rows = board.length
    const cols = board[0].length

    const checkLine = (getCell, length) => {
        let count = 0
        let last = null

        for (let i = 0; i < length; i++) {
            const cell = getCell(i)
            if (cell !== '.' && cell === last) {
                count++
            } else {
                count = cell === '.' ? 0 : 1
                last = cell
            }

            if (count === 4) return true
        }

        return false
    }

    for (let r = 0; r < rows; r++) {
        if (checkLine(c => board[r][c], cols)) return true
    }

    for (let c = 0; c < cols; c++) {
        if (checkLine(r => board[r][c], rows)) return true
    }

    return false
}

console.log(hasFourLights([
    ['.', '.', '.', '.', '.'],
    ['R', 'R', 'R', 'R', '.'],
    ['G', 'G', '.', '.', '.']
]))

console.log(hasFourLights([
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.'],
    ['.', 'G', '.', '.']
]))

console.log(hasFourLights([
    ['R', 'G', 'R'],
    ['G', 'R', 'G'],
    ['G', 'R', 'G']
]))