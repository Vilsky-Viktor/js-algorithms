/*
HackerRank problem
My web-site http://upmate.io

Alice has a binary string. She thinks a binary string is beautiful if and only
if it doesn't contain the substring "010".

In one step, Alice can change a 0 to a 1 or vice versa.
Count and print the minimum number of steps needed to make Alice see the string as beautiful.

Example:
b = '010'
result = 1
 */

const b = '010101010'

function beautifulBinaryString(b) {
    // find all the matches of 010
    const matches = b.match(/010/g)
    // print its length or 0 if the matches variable equals to null
    return matches ? matches.length : 0
}

console.log(beautifulBinaryString(b))