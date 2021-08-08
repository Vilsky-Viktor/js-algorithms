/*
HackerRank problem
My web-site http://upmate.io

In this challenge, you are required to calculate and print the sum of the elements in an array,
keeping in mind that some of those integers may be quite large.
 */

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    // use reduce method to accumulate the total sum result
    // in order to support a very big integers use BigInt global method with conversion of the result to string
    const big = ar.reduce((a,v) => a + BigInt(v), BigInt(0))
    return big.toString()
}

console.log(aVeryBigSum(ar))