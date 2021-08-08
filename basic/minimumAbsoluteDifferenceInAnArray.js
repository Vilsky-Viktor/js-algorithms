/*
HackerRank problem
My web-site http://upmate.io

Complete the minimumAbsoluteDifference function in the editor below.
It should return an integer that represents the minimum absolute difference between any pair of elements.

Example:
arr = [-2, 2, 4]
result = 2
 */

const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]

function minimumAbsoluteDifference(arr) {
    // sort the array
    arr.sort((a,b) => a - b)
    // define min variable for a greedy approach
    let min = Infinity
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // define absolute difference between an adjacent values
        const abs = Math.abs(arr[i] - arr[i+1])
        // check if the current abs is less then the min value
        if (abs < min) min = abs
    }
    return min
}

console.log(minimumAbsoluteDifference(arr))