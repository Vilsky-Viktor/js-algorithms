/*
Given:
arr - array of integers
sum - target number

Task:
Find a pair of integers from a given array
which sum ends up to a target number.
Return a correct pair as an array

Example:
arr = [1, 3, 5, 2, 6, 7, 5]
sum = 10
result = [3, 7]
 */

// Function complexity: O(n) time, O(n) space
function sumOfTwo(arr, sum) {
    // use Set to have O(1) time complexity for add() and has() methods
    const storage = new Set()

    // loop through all the given integers in the array
    for (let digit of arr) {
        // calculate int we need to end up to a required sum
        // for the first iteration it'll be 10 - 1 = 9
        const need = sum - digit
        // check if we have a needed integer in the storage
        if (storage.has(need)) {
            // if we have it - return our result with a pair
            return [digit, need]
        } else {
            // if we don't - add current number from iteration to the storage
            storage.add(digit)
        }
    }

    // in case we found no pairs we return null
    return null
}

// our arguments
const arr = [1, 3, 5, 2, 6, 7, 5]
const sum = 10

// call the function and get a result
const result = sumOfTwo(arr, sum)

// print the result to the console
console.log(result)

// My web-site http://upmate.io
// YouTube channel - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ