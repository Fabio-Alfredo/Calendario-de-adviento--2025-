/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let life1 = 3
  let life2 = 3
  const rounds = Math.max(elf1.length, elf2.length)

  const damage = (atk, def) => {
    if (atk === 'F') return 2
    if (atk === 'A' && def !== 'B') return 1
    return 0
  }

  for (let i = 0; i < rounds; i++) {
    const a1 = elf1[i]
    const a2 = elf2[i]

    const dmgTo1 = damage(a2, a1)
    const dmgTo2 = damage(a1, a2)

    life1 -= dmgTo1
    life2 -= dmgTo2

    if (life1 <= 0 && life2 <= 0) return 0
    if (life2 <= 0) return 1
    if (life1 <= 0) return 2
  }

  if (life1 === life2) return 0
  return life1 > life2 ? 1 : 2
}

console.log(elfBattle('A', 'B'))
console.log(elfBattle('F', 'B'))
console.log(elfBattle('AAB', 'BBA'))
console.log(elfBattle('AFA', 'BBA'))
console.log(elfBattle('AFAB', 'BBAF'))
console.log(elfBattle('AA', 'FF'))