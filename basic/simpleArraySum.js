/*
HackerRank problem
My web-site http://upmate.io

Given an array of integers, find the sum of its elements.
For example, if the array arr = [1,2,3], 1+2+3, so return 6.
 */

const ar = [1,2,3,4,10,11]

function simpleArraySum(ar) {
    // Just use reduce method in order to accumulate the total sum result
    return ar.reduce((a,v) => a + v, 0)
}

console.log(simpleArraySum(ar))