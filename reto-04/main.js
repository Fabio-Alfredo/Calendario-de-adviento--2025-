/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */

const operations = {
    '+': 1,
    '-': -1
}

function decodeSantaPin(code) {


    const parts = code.match(/\[(.*?)\]/g).map(v => v.slice(1, -1))
    if (parts.length < 4)
        return null

    const res = []

    for (const part of parts) {

        if (part.length === 1 && part === '<') {
            res.push(res[res.length - 1])
            continue;
        }

        let number = Number(part[0])
        for (const op of part.slice(1)) {
            number = (number + operations[op] + 10) % 10
        }
        res.push(String(number))
    }

    return res.join('');
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
console.log(decodeSantaPin('[9+][0-][4][<]'))
console.log(decodeSantaPin('[1+][2-]'))

