/*
HackerRank problem
My web-site http://upmate.io

In this challenge, the task is to debug the existing code to successfully execute all provided test files.
Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
Debug the given function strings_xor to find the XOR of the two given strings appropriately.
Note: You can modify at most three lines in the given code and you cannot add or remove lines to the code.
 */

const s = '10101'
const t = '00101'

function stringsXor(s, t) {
    let res = ''
    // loop through the strings
    for (let i = 0; i < s.length; i++) {
        // if current bit of the first and second strings are same put 0
        if (s[i] === t[i]) res += '0'
        // otherwise put 1
        else res += '1'
    }
    return res
}

console.log(stringsXor(s, t))