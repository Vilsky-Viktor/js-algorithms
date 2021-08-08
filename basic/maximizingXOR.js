/*
HackerRank problem
My web-site http://upmate.io

Given two integers, l and r, find the maximal value of a xor b, written a^b, where a and b satisfy the following
 condition: l <= a <= b <= r

For example, if l = 11 and r = 12, then:
11^11 = 0
11^12 = 7
12^12 = 0
Our maximum value is 7.

Return the maximum value of the xor operations for all permutations of the integers from l to r, inclusive.
 */

const l = 10
const r = 15

function maximizingXor(l, r) {
    // calculate XOR of the two given values
    let xor = l ^ r
    let ans = 0
    let i = 0

    while (xor) {
        // accumulate the answer by adding a result of shifting left 1 by the current iteration
        // 0 + (2 ** 0) = 1; 1 + (2 ** 1) = 3; 3 + (2 ** 2) = 7
        ans = ans + (1 << i++)
        // shift right xor value by 1 on each pass to get eventually 0 and quit the loop
        xor = xor >> 1
    }

    return ans
}

console.log(maximizingXor(l,r))