/*
HackerRank problem
My web-site http://upmate.io

You are given two arrays, A and B, both containing N integers.
A pair of indices (i,j) is beautiful if the i-th element of array A is equal to the j-th element of array B.
In other words, pair (i,j) is beautiful if and only if A[i] = B[j].
A set containing beautiful pairs is called a beautiful set.

A beautiful set is called pairwise disjoint if for every pair (l[i], r[i]) belonging to the set there is no
 repetition of either l[i] or r[i] values.
For instance, if A = [10,11,12,5,14] and B = [8,9,11,11,5] the beautiful set [(1,2),(1,3),(3,4)] is not pairwise
 disjoint as there is a repetition of !, that is l[0][0] = l[1][0].

Your task is to change exactly 1 element in B so that the size of the pairwise disjoint beautiful set is maximum.
Note: You must first change 1 element in B, and your choice of element must be optimal.

Example:
A = [1,2,3,4]
B = [1,2,3,3]
result = 4
 */

const A = [3, 5, 7, 11, 5, 8]
const B = [5, 7, 11, 10, 5, 8]

function beautifulPairs(A, B) {
    // create a hash map to count number of value occurrences
    const mapA = new Map()
    // loop through the A array and fill the hash map
    A.forEach(v => mapA.set(v, mapA.get(v)+1 || 1))

    // calculate how many pairs we have initially
    const count = B.reduce((a, v) => {
        // if there are occurrences of the current value left in the map
        if (mapA.get(v) > 0) {
            // decrease number of occurrences
            mapA.set(v, mapA.get(v) - 1)
            // increase count of pairs
            return ++a
        } else return a
    }, 0)

    // if the count of pairs equals to the length of the given array then we loose 1 pair by changing any val of B
    // otherwise we change val of B to any of free values of A and get one additional pair
    return (count < A.length) ? count + 1 : count - 1
}

console.log(beautifulPairs(A,B))