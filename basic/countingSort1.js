/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Another sorting method, the counting sort, does not require comparison.
Instead, you create an integer array whose index range covers the entire range of values in your array to sort.
Each time a value occurs in the original array, you increment the counter at that index.
At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

For this exercise, always return a frequency array with 100 elements.
The example above shows only the first 4 elements, the remainder being zeros.

Given a list of integers, count and return the number of times each value appears as an array of integers.
 */

const arr = [1,1,3,2,1]

function countingSort(arr) {
    // create a new array filled with 100 0-value items
    const counts = new Array(100).fill(0)
    // loop through the given array, increment an index of counts which equals to a current array value
    arr.forEach(val => counts[val]++)
    return counts
}

console.log(countingSort(arr))