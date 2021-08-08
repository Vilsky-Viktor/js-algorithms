/*
HackerRank problem
My web-site http://upmate.io

The median of a list of numbers is essentially its middle element after sorting.
The same number of elements occur after it as before.
Given a list of numbers with an odd number of elements, find the median?

Example:
arr = [5,3,1,2,4]
The sorted array [1,2,3,4,5]. The middle element and the median is 3.
 */

const arr = [0, 1, 2, 4, 6, 5, 3]

function findMedian(arr) {
    // sort the array
    arr.sort((a,b) => a - b)
    // get the median
    return arr[Math.floor(arr.length/2)]
}

console.log(findMedian(arr))