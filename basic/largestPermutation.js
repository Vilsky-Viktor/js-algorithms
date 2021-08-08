/*
HackerRank problem
My web-site http://upmate.io

You are given an unordered array of unique integers incrementing from 1.
You can swap any two elements a limited number of times.
Determine the largest lexicographical value array that can be created by executing no more than the
limited number of swaps.

Example:
arr = [1,2,3,4]
k = 1

The following arrays can be formed by swapping the 1 with the other elements:
[2,1,3,4]
[3,2,1,4]
[4,2,3,1]

The highest value of the four (including the original) is [4,2,3,1].
If k >= 2, we can swap to the highest possible value: [4,3,2,1].
 */

const k = 1
const arr = [2,1]

function largestPermutation(k, arr) {
    // define current max value of the array
    let max = Math.max(...arr)
    // define current index for swapping
    let idx = 0
    // create a hash map with all the values and their current indexes
    let hash = arr.reduce((a,v,i) => a.set(v, i), new Map())

    let i = 0
    // loop until we achieve limit of swaps or length of the array
    while (i < k && i < arr.length) {
        // if the current max does not exist in the array
        if (!hash.has(max)) {
            // decrement max value and increment swap count
            max--
            i++
        // if the current max equals to the current value to swap with
        } else if (arr[idx] === max) {
            // increment swap index and decrement max value
            idx++
            max--
        // otherwise swap values
        } else {
            // define index of the current max value using hash map
            const maxIdx = hash.get(max)
            // update indexes of the swapped values
            hash.set(arr[idx], maxIdx)
            hash.set(max, idx)
            // swap values
            arr[maxIdx] = arr[idx]
            arr[idx++] = max--
            // increment swap count
            i++
        }
    }

    return arr
}

console.log(largestPermutation(k, arr))