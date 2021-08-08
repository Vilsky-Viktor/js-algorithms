/*
HackerRank problem
My web-site http://upmate.io

Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.
 */

const s = '04:05:45PM'

function timeConversion(s) {
    // get hours, minutes, seconds and AM/PM with regex
    const match = s.match(/(\d{2}):(\d{2}):(\d{2})([AP]M)/)

    // if we get 12 AM we convert it to 00
    if (match[4] === 'AM' && match[1] === '12') {
        match[1] = '00'
    // to all the PMs except 12 we add 12 hours
    } else if (match[4] === 'PM' && match[1] !== '12') {
        match[1] = +match[1] + 12
    }

    return `${match[1]}:${match[2]}:${match[3]}`
}

console.log(timeConversion(s))