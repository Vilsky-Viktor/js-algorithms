/*
HackerRank problem
My web-site http://upmate.io

Given two strings, determine if they share a common substring.
A substring may be as small as one character.
Return string: either YES or NO.

Example:
s1 = 'and'
s2 = 'art'
These share the common substring a.
result = 'YES'

 */

const s1 = 'and'
const s2 = 'art'

function twoStrings(s1, s2) {
    // create a hash table for the first string to store characters
    let hash = new Set()

    // fill the hash with a data
    for (let char of s1) {
        hash.add(char)
    }

    // loop through the second string
    for (let char of s2) {
        // if the second string has at least one character from the first string - return 'YES'
        if (hash.has(char)) return 'YES'
    }

    return 'NO'
}

console.log(twoStrings(s1,s2))