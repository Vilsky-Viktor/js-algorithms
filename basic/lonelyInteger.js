/*
HackerRank problem
My web-site http://upmate.io

Given an array of integers, where all elements but one occur twice, find the unique element.

Example:
a = [1,2,3,4,3,2,1]
The unique element is 4.

Return the element that occurs only once
 */

const a = [1,2,3,4,3,2,1]

function lonelyinteger(a) {
    // use XOR ^ operator to define non-duplicated value
    // x ^ x = 0
    // x ^ 0 = x
    return a.reduce((a,v) => a ^ v, 0)
}

console.log(lonelyinteger(a))