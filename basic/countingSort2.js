/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

The counting sort is used if you just need to sort a list of integers.
Rather than using a comparison, you create an integer array whose index range covers the entire range of values
in your array to sort. Each time a value occurs in the original array, you increment the counter at that index.
At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

Given an unsorted list of integers, use the counting sort method to sort the list and then print the sorted list.
 */

const arr = [1,1,3,2,1]

function countingSort(arr) {
    // create a new array filled with 100 0-value items
    const counts = new Array(100).fill(0)
    // loop through the given array, increment an index of counts which equals to a current array value
    arr.forEach(val => counts[val]++)

    // loop through the counts with reduce method to return a sorted array
    return counts.reduce((acc, val, idx) => {
        // push to the accumulator the current index as a value repeating it val times (counter)
        acc.push(...Array(val).fill(idx))
        // return updated accumulator
        return acc
    }, [])
}

console.log(countingSort(arr))