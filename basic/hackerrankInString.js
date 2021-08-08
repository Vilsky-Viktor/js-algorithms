/*
HackerRank problem
My web-site http://upmate.io

We say that a string contains the word hackerrank if a subsequence of its characters spell the word hackerrank.
Remember that a subsequence maintains the order of characters selected from a sequence.

More formally, let p[0],p[1],...,[9] be the respective indices of h, a, c, k, e, r, r, a, n, k in string s.
If p[0] < p[1] < p[2] < ... < p[9] is true, then s contains hackerrank.

For each query, print YES on a new line if the string contains hackerrank, otherwise, print NO.

Example:
s = 'haacckkerrannkk'
result = 'YES'
 */

const s = 'haacckkerrannkk'

function hackerrankInString(s) {
    const target = 'hackerrank'
    const targetLen = target.length
    // idx of the target string
    let idx = 0

    // if the given string length is less than the target - we want to return 'NO' instantly
    if (s.length < targetLen) return 'NO'

    // loop through the whole string
    for (let char of s) {
        // if the current char equals to a target char located at the current idx - increment the idx
        if (char === target[idx]) idx++
        // if the index equals to a target string length - we found a subsequence
        if (idx === targetLen) return 'YES'
    }

    return 'NO'
}

console.log(hackerrankInString(s))