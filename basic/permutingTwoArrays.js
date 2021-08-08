/*
HackerRank problem
My web-site http://upmate.io

There are two -element arrays of integers, A and B.
Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.

Return YES if some permutation A', B' satisfying the relation exists. Otherwise, return NO.

Example:
A = [0,1]
B = [0,2]
k = 1

A valid A',B' is A'=[1,0] and B'=[0,2]: 1+0 >= 1 and 0+2 >= 1. Return YES.
 */

const k = 4
const A = [20, 1]
const B = [1, 1]

function twoArrays(k, A, B) {
    // calculate sum of all the items of A. If there are values greater than k - update them with the value of k
    const sumA = A.reduce((a,v) => a += (v > k) ? k : v, 0)
    // calculate sum of all the items of B. If there are values greater than k - update them with the value of k
    const sumB = B.reduce((a,v) => a += (v > k) ? k : v, 0)

    // if the length of the array is 0 - return 'NO'
    // if sum of all the items of A and B is equal or greater than k multiplied by length of the array - return 'YES'
    // otherwise return 'NO'
    return (A.length && sumA + sumB >= k * A.length) ? 'YES' : 'NO'
}

console.log(twoArrays(k, A, B))