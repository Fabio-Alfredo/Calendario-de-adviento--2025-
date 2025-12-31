/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
    const keys = Object.keys(data[0])

    const sorted = [...data].sort((a, b) => {
        if (typeof a[sortBy] === 'number') {
            return a[sortBy] - b[sortBy]
        }
        return String(a[sortBy]).localeCompare(String(b[sortBy]))
    })

    const widths = keys.map((key, i) => {
        const header = String.fromCharCode(65 + i)
        const maxValue = Math.max(
            header.length,
            ...sorted.map(row => String(row[key]).length)
        )
        return maxValue + 2
    })

    const line = '+' + widths.map(w => '-'.repeat(w)).join('+') + '+'

    let table = line + '\n'

    table += '|'
    widths.forEach((w, i) => {
        const letter = String.fromCharCode(65 + i)
        table += ' ' + letter.padEnd(w - 1) + '|'
    })
    table += '\n' + line + '\n'

    sorted.forEach(row => {
        table += '|'
        keys.forEach((key, i) => {
            table += ' ' + String(row[key]).padEnd(widths[i] - 1) + '|'
        })
        table += '\n'
    })

    table += line
    return table
}

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
))

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
))