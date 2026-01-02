/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
    const rows = map.length
    const cols = map[0].length
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    let start
    const gifts = []

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === 'S') start = [r, c]
            if (map[r][c] === 'G') gifts.push([r, c])
        }
    }

    const bfs = (targetR, targetC) => {
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
        const queue = [[start[0], start[1], 0]]
        visited[start[0]][start[1]] = true

        while (queue.length) {
            const [r, c, d] = queue.shift()
            if (r === targetR && c === targetC) return d

            for (const [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc

                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    !visited[nr][nc] &&
                    map[nr][nc] !== '#'
                ) {
                    visited[nr][nc] = true
                    queue.push([nr, nc, d + 1])
                }
            }
        }
        return -1
    }

    let total = 0
    for (const [r, c] of gifts) {
        const dist = bfs(r, c)
        if (dist === -1) return -1
        total += dist
    }

    return total
}

console.log(minStepsToDeliver([
    ['S', '.', 'G'],
    ['.', '#', '.'],
    ['G', '.', '.']
]))

console.log(minStepsToDeliver([
    ['S', '#', 'G'],
    ['#', '#', '.'],
    ['G', '.', '.']
]))

console.log(minStepsToDeliver([['S', 'G']]))
