/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
    const frequencies = new Map()

    for (const char of toy) {
        const key = char.toLowerCase()
        frequencies.set(key, (frequencies.get(key) || 0) + 1)
    }

    for (const char of toy) {
        if (frequencies.get(char.toLowerCase()) === 1) {
            return char
        }
    }

    return ''
}

console.log(findUniqueToy('AaBbCc'))
console.log(findUniqueToy('abcDEF'))
console.log(findUniqueToy('aAaAaAF'))
console.log(findUniqueToy('sTreSS'))
console.log(findUniqueToy('z'))