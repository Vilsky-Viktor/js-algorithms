/*
HackerRank problem
My web-site http://upmate.io

Given two arrays of integers, find which elements in the second array are missing from the first array.

Example:
arr = [7,2,5,3,5,3]
arr = [7,2,5,4,6,3,5,3]

The brr array is the original list. The numbers missing are [4,6].

- If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is
 the same. If that is not the case, then it is also a missing number.
- Return the missing numbers sorted ascending.
- Only include a missing number once, even if it is missing multiple times.
- The difference between the maximum and minimum numbers in the original list is less than or equal to 100.
 */

const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
const brr = [208, 203, 204, 204, 205, 206, 207, 205, 203, 206, 205, 206, 204]

function missingNumbers(arr, brr) {
    // define min value to normalize values to have 0-base
    const minB = Math.min(...brr)
    // since there is a constraint max brr - min brr <= 100 we need an array of length 101
    const count = new Array(101).fill(0)
    // 1. normalize value by subtracting min value from the current value of the A array
    // 2. use normalized value as an index of the count array and decrement its value each time you come across it
    arr.forEach(val => count[val-minB]--)
    // increment normalized value each time you find it in the B array
    brr.forEach(val => count[val-minB]++)
    // find all the indexes in the count array with a value greater than 0
    // all those values represent the diff between arrays
    // convert normalized value back to an initial value by adding the min value to it
    return count.reduce((acc, val, idx) => val > 0 ? [...acc, idx+minB] : acc, [])
}

console.log(missingNumbers(arr, brr))