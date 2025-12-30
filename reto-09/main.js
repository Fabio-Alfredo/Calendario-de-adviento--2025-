/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
    const rows = board.trim().split('\n')
    const grid = rows.map(row => row.split(''))

    let x, y

    // buscar posición inicial
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '@') {
                y = i
                x = j
            }
        }
    }

    let collected = false

    for (const move of moves) {
        if (move === 'L') x--
        if (move === 'R') x++
        if (move === 'U') y--
        if (move === 'D') y++

        // fuera del tablero
        if (
            y < 0 ||
            y >= grid.length ||
            x < 0 ||
            x >= grid[0].length
        ) {
            return collected ? 'success' : 'crash'
        }

        if (grid[y][x] === '#') {
            return collected ? 'success' : 'crash'
        }

        if (grid[y][x] === '*') {
            collected = true
        }
    }

    return collected ? 'success' : 'fail'
}

const board = `
.....
.*#.*
.@...
.....
`

console.log(moveReno(board, 'D'))

console.log(moveReno(board, 'U'))

console.log(moveReno(board, 'RU'))

console.log(moveReno(board, 'RRRUU'))

console.log(moveReno(board, 'DD'))

console.log(moveReno(board, 'UUU'))

console.log(moveReno(board, 'RR'))
