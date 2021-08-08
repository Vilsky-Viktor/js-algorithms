/*
HackerRank problem
My web-site http://upmate.io

You will be given a list of 32 bit unsigned integers.
Flip all the bits (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.

Example:
n = 9
00000000000000000000000000001001(2) = 9(10)
11111111111111111111111111110110(2) = 4294967286(10)
Return 4294967286
 */

const n = 9

function flippingBits(n) {
    // shift right the given integer by 0 and fill the left side with 0s using >>> 0
    // revert all the bits using ~
    return ~n>>>0
}

console.log(flippingBits(n))