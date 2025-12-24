/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    let result = []
    let position = 0

    for (let i = 1; i <= height; i++) {
        const stars = 2 * i - 1
        const spaces = height - i
        let row = ''

        for (let j = 0; j < stars; j++) {
            position++
            if (position % frequency === 0) {
                row += ornament
            } else {
                row += '*'
            }
        }

        result.push(' '.repeat(spaces) + row)
    }

    result.push(' '.repeat(height - 1) + '#')
    return result.join('\n')
}

console.log(drawTree(5, 'o', 2))

console.log(drawTree(3, '@', 3))

console.log(drawTree(4, '+', 1))