/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
    const rows = maze.length
    const cols = maze[0].length
    const visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    )

    let start

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (maze[r][c] === 'S') {
                start = [r, c]
            }
        }
    }

    const queue = [start]
    visited[start[0]][start[1]] = true

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    while (queue.length) {
        const [r, c] = queue.shift()

        if (maze[r][c] === 'E') return true

        for (const [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            if (
                nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                !visited[nr][nc] &&
                maze[nr][nc] !== '#'
            ) {
                visited[nr][nc] = true
                queue.push([nr, nc])
            }
        }
    }

    return false
}

console.log(canEscape([
    ['S', '.', '#', '.'],
    ['#', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['#', '#', '#', 'E']
]))

console.log(canEscape([
    ['S', '#', '#'],
    ['.', '#', '.'],
    ['.', '#', 'E']
]))

console.log(canEscape([['S', 'E']]))

console.log(canEscape([
    ['S', '.', '.', '.', '.'],
    ['#', '#', '#', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '#', '#', '#', '#'],
    ['.', '.', '.', '.', 'E']
]))

console.log(canEscape([
    ['S', '.', '.'],
    ['.', '.', '.'],
    ['#', '#', '#'],
    ['.', '.', 'E']
]))