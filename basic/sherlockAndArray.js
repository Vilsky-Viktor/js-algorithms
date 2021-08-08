/*
HackerRank problem
My web-site http://upmate.io

Watson gives Sherlock an array of integers.
His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum
of all elements to the right.
You will be given arrays of integers and must determine whether there is an element that meets the criterion.
If there is, return YES. Otherwise, return NO.

Example:
arr = [5,6,8,11]
8 is between two subarrays that sum to 11.

 */

const arr = [1]

function balancedSums(arr) {
    // calculate sum of all the values of the array
    const sum = arr.reduce((acc, val) => acc += val, 0)
    // accumulate sum of the left side from the current value
    let left = 0
    // loop through the whole array
    for (let val of arr) {
        // if doubled left sum equals to the total sum minus the current value then we return 'YES'
        if (2 * left === sum - val) return 'YES'
        // add the current value to the left sum accumulator
        left += val
    }
    // in all the other cases there is no an element which meets the criterion
    return 'NO'
}

console.log(balancedSums(arr))