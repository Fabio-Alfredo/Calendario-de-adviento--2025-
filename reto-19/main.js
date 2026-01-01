/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
    if (routes.length === 0) return []

    const map = new Map()
    for (const [from, to] of routes) {
        map.set(from, to)
    }

    const result = [routes[0][0]]
    let current = routes[0][0]

    while (map.has(current)) {
        const next = map.get(current)
        result.push(next)
        current = next
    }

    return result
}

console.log(revealSantaRoute([
    ['MEX', 'CAN'],
    ['UK', 'GER'],
    ['CAN', 'UK']
]))

console.log(revealSantaRoute([
    ['USA', 'BRA'],
    ['JPN', 'PHL'],
    ['BRA', 'UAE'],
    ['UAE', 'JPN'],
    ['CMX', 'HKN']
]))

console.log(revealSantaRoute([
    ['STA', 'HYD'],
    ['ESP', 'CHN']
]))
