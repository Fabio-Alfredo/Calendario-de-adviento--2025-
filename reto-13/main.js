/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
    let x = 0
    let y = 0
    const visited = new Set()

    while (true) {
        if (
            y < 0 ||
            y >= factory.length ||
            x < 0 ||
            x >= factory[0].length
        ) {
            return 'broken'
        }

        const key = `${y},${x}`
        if (visited.has(key)) return 'loop'
        visited.add(key)

        const cell = factory[y][x]
        if (cell === '.') return 'completed'

        if (cell === '>') x++
        if (cell === '<') x--
        if (cell === '^') y--
        if (cell === 'v') y++
    }
}

console.log(
    runFactory([
        '>>.'
    ]))

console.log(
    runFactory([
        '>>>'
    ]))

console.log(runFactory([
    '>><'
]))

console.log(runFactory([
    '>>v',
    '..<'
]))

console.log(runFactory([
    '>>v',
    '<<<'
]))

console.log(runFactory([
    '>v.',
    '^..'
]))

console.log(runFactory([
    'v.',
    '^.'
]))