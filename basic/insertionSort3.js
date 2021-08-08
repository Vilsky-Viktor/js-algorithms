/*
HackerRank problem
My web-site http://upmate.io

Calculate the number of shifts insertion sort makes while sorting.
The only thing you should print is the number of shifts made by the algorithm to completely sort the array.
A shift occurs when an element's position changes in the array. Do not shift an element if it is not necessary.

Example:
arr = [2, 1, 3, 1, 2]
result = 4
 */

const arr = [2, 1, 3, 1, 2]

function runningTime(arr) {
    // track an inversion count
    let count = 0
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // loop from the i + 1 item to the end of the array
        for (let j = i+1; j < arr.length; j++) {
            // check if i element is greater than j element
            if (arr[i] > arr[j]) count++
        }
    }
    return count
}

console.log(runningTime(arr))