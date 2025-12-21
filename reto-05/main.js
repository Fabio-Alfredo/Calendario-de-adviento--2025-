/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
    fromTime = fromTime.replace(' NP', '')
    takeOffTime = takeOffTime.replace(' NP', '')

    const [dateD, timeD] = fromTime.split('@')
    const [yearD, mountD, dayD] = dateD.split('*').map(Number)
    const [hoursD, minutsD, secondsD] = timeD.split('|').map(Number)

    const [date, time] = takeOffTime.split('@')
    const [year, mount, day] = date.split('*').map(Number)
    const [hours, minuts, seconds] = time.split('|').map(Number)

    const fromTimeUtc = new Date(
        yearD, mountD - 1, dayD, hoursD, minutsD, secondsD
    )

    const takeOffTimeUtc = new Date(
        year, mount - 1, day, hours, minuts, seconds
    )

    const respMili = takeOffTimeUtc.getTime() - fromTimeUtc.getTime();

    return Math.floor(respMili / 1000)
}

const takeoff = '2025*12*25@00|00|00 NP'

console.log(timeUntilTakeOff('2025*12*25@00|00|30 NP', takeoff))
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff))
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff))