/*
Leetcode problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Find a pair of integers from a given array which sum ends up to a target number.
Return a correct pair as an array

Example:
arr = [1, 3, 5, 2, 6, 7, 5]
sum = 10
result = [3, 7]
 */

// our arguments
const arr = [1, 3, 5, 2, 6, 7, 5, 3, 10, 7]
const sum = 10

// Function complexity: O(n) time, O(n) space
function twoSum(arr, sum) {
    // use Set to have O(1) time complexity for add() and has() methods
    const storage = new Set()

    // loop through all the given integers in the array
    for (let value of arr) {
        // calculate int we need to end up to a required sum
        // for the first iteration it'll be 10 - 1 = 9
        const need = sum - value
        // check if we have a needed integer in the storage
        if (storage.has(need)) {
            // if we have it - return our result with a pair
            return [value, need]
        }
        // if we don't - add current number from iteration to the storage
        storage.add(value)
    }

    // in case we found no pairs we return an empty array
    return []
}

console.log(twoSum(arr, sum))

// Function complexity: O(n) time, O(n) space
function twoSumAllPairs(arr, sum) {
    // use Set to have O(1) time complexity for add() and has() methods
    const storage = new Set()
    // here we are going to accumulate our found pairs
    const pairs = []

    // loop through all the given integers in the array
    for (let value of arr) {
        // calculate int we need to end up to a required sum
        // for the first iteration it'll be 10 - 1 = 9
        const need = sum - value
        // check if we have a needed integer in the storage
        if (storage.has(need)) {
            // if we have it - push to pairs array
            pairs.push([value, need])
            // delete needed value from the storage to avoid duplicates
            storage.delete(need)
        } else {
            // if we don't - add current number from iteration to the storage
            storage.add(value)
        }
    }

    // return all the collected pairs
    return pairs
}

console.log(twoSumAllPairs(arr, sum))

// Function complexity: O(n) time, O(n) space
function twoSumAllPairsWithDuplicates(arr, sum) {
    // use Set to have O(1) time complexity for add() and has() methods
    const storage = new Set()
    // here we are going to accumulate our found pairs
    const pairs = []

    // loop through all the given integers in the array
    for (let value of arr) {
        // calculate int we need to end up to a required sum
        // for the first iteration it'll be 10 - 1 = 9
        const need = sum - value
        // check if we have a needed integer in the storage
        if (storage.has(need)) {
            // if we have it - push to pairs array
            pairs.push([value, need])
        }
        // if we don't - add current number from iteration to the storage
        storage.add(value)
    }

    // return all the collected pairs
    return pairs
}

console.log(twoSumAllPairsWithDuplicates(arr, sum))

// Function complexity: O(n) time, O(n) space
function twoSumIndexes(arr, sum) {
    // use Set to have O(1) time complexity for add() and has() methods
    const storage = new Map()
    // here we are going to accumulate our found pairs
    const pairs = []
    // define length of the array out of the loop to gain efficiency
    const arrLength = arr.length

    // loop through all the given integers in the array
    for(let i = 0; i < arrLength; i++) {
        // check if we have a complement integer in the storage
        if(storage.has(arr[i])) {
            // if we have it - push to pairs array
            pairs.push([storage.get(arr[i]), i])
            // delete complement from the storage to avoid duplicates
            storage.delete(arr[i])
        } else {
            // calculate current complement value
            const complement = sum - arr[i]
            // add current complement and its index from the iteration to the storage
            storage.set(complement, i)
        }
    }

    return pairs
}

console.log(twoSumIndexes(arr, sum))

// our arguments sorted
const arrSorted = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const target = 5

// Function complexity: O(n) time, O(1) space
function twoSumSorted(arr, target) {
    // define array start index
    let start = 0
    // define array end index
    let end = arr.length - 1

    // loop until start === end
    while (start !== end) {
        // calculate sum of current values of start and end indexes
        const sum = arr[start] + arr[end]

        // if the sum is greater than the target - decrease the end index by 1
        if (sum > target) end--
        // if the sum is less than the target - increase the start index by 1
        else if (sum < target) start++
        // our sum equals the target value and we return found values
        else return [arr[start], arr[end]]
    }

    // in case we found no pairs we return an empty array
    return []

}

console.log(twoSumSorted(arr, sum))
