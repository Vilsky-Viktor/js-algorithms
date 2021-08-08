/*
HackerRank problem
My web-site http://upmate.io

Given five positive integers, find the minimum and maximum values
that can be calculated by summing exactly four of the five integers.
Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example:
arr = [1,3,5,7,9]
The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9=24.
The function prints 16 24
 */

const arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    // calculate sum of all the elements
    const sum = arr.reduce((a,v) => a + v, 0)
    // min sum = total sum - max element
    // max sum = total sum - min element
    console.log(sum - Math.max(...arr), sum - Math.min(...arr))
}

miniMaxSum(arr)