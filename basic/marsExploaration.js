/*
HackerRank problem
My web-site http://upmate.io

A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission.
Given the signal received by Earth as a string, s, determine how many letters of the SOS message
have been changed by radiation.

Example:
s = 'SOSTOT'
result = 2
 */

const s = 'SQSSOT'

function marsExploration(s) {
    // save SOS string in order to track a currently required character
    const sos = 'SOS'
    let count = 0

    // loop through the given string
    for (let i = 0; i < s.length; i++) {
        // compare current letter with a required letter calculated by index rotation of SOS string
        if (s[i] !== sos[i % 3]) count++
    }

    return count
}

console.log(marsExploration(s))