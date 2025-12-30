/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
    let unsafe = 0
    const rows = warehouse.length
    const cols = warehouse[0].length

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (warehouse[i][j] === '*') {
                const hasCamera =
                    warehouse[i - 1]?.[j] === '#' ||
                    warehouse[i + 1]?.[j] === '#' ||
                    warehouse[i]?.[j - 1] === '#' ||
                    warehouse[i]?.[j + 1] === '#'

                if (!hasCamera) unsafe++
            }
        }
    }

    return unsafe
}

console.log(
    findUnsafeGifts([
        '.*.',
        '*#*',
        '.*.'
    ])
)

console.log(
    findUnsafeGifts([
        '...',
        '.*.',
        '...'
    ])
)

console.log(
    findUnsafeGifts([
        '*.*',
        '...',
        '*#*'
    ])
)

console.log(
    findUnsafeGifts([
        '.....',
        '.*.*.',
        '..#..',
        '.*.*.',
        '.....'
    ])
)