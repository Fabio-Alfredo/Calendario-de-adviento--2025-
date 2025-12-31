/**
 * @param {number[]} gifts - The gifts to pack
 * @param {number} maxWeight - The maximum weight of the sleigh
 * @returns {number | null} The number of sleighs needed
 * Return null if no sleigh can carry all the gifts
 */
function packGifts(gifts, maxWeight) {
    let sleighCount = 0
    let remainingWeight = 0

    for (const weight of gifts) {
        if (weight > maxWeight) return null

        if (remainingWeight + weight > maxWeight) {
            sleighCount++
            remainingWeight = 0
        }

        remainingWeight += weight
    }

    if (gifts.length > 0) sleighCount++

    return sleighCount
}

console.log(packGifts([2, 3, 4, 1], 5))
console.log(packGifts([3, 3, 2, 1], 3))
console.log(packGifts([1, 1, 1, 1], 2))
console.log(packGifts([5, 6, 1], 5))
console.log(packGifts([], 10))
