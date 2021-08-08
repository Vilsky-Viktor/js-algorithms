/*
HackerRank problem
My web-site http://upmate.io

Given an integer n, find each x such that:
- 0 <= x <= n
- n + x = n ^ x

Example:
n = 4

There are four values that meet the criteria:
4 + 0 = 4 ^ 0 = 4
4 + 1 = 4 ^ 1 = 5
4 + 2 = 4 ^ 2 = 6
4 + 3 = 4 ^ 3 = 7
Return 4

Return the number of values found
 */

const n = 4

function sumXor(n) {
    let countZero = 0
    // calculate number of zeros in a binary representation of the given integer
    while (n > 1) {
        countZero += n % 2 ? 0 : 1
        n = n / 2 | 0
    }
    // return result as 2 in power of count of zeros
    return 2 ** countZero
}

console.log(sumXor(n))