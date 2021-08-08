/*
HackerRank problem
My web-site http://upmate.io

You are given a string containing characters A and B only.
Your task is to change it into a string such that there are no matching adjacent characters.
To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.

Example:
s = 'AABAAB'
result = 2
 */

const s = 'AAABBB'

function alternatingCharacters(s) {
    let count = 0

    for (let i = 0; i < s.length - 1; i++) {
        // check if the next char is duplicate of the current one
        // if it's so - increment the counter
        if (s[i] === s[i+1]) count++
    }

    return count
}

console.log(alternatingCharacters(s))