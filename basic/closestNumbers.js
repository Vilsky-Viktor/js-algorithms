/*
HackerRank problem
My web-site http://upmate.io

Sorting is useful as the first step in many different tasks.
The most common task is to make finding things easier, but there are other uses as well.
In this case, it will make it easier to determine which pair or pairs of elements have the smallest
absolute difference between them.

Given a list of unsorted integers, arr, find the pair of elements that have the smallest
absolute difference between them. If there are multiple pairs, find them all.

Example:
arr = [5,2,3,4,1]
Sorted, [1,2,3,4,5]. Several pairs have the minimum difference of 1: [(1,2),(2,3),(3,4),(4,5)].
result = [1,2,2,3,3,4,4,5]
 */

const arr = [-5, 15, 25, 71, 63]

function closestNumbers(arr) {
    // sort an array (asc)
    arr.sort((a,b) => a - b)

    // track a min absolute diff
    let minDiff = Infinity
    // collect pairs with a min diff
    let closest = []

    for (let i = 0; i < arr.length; i++) {
        // define a diff between the current value and the next one
        const diff = arr[i+1] - arr[i]

        // if the current diff is less than the min one
        if (diff < minDiff) {
            // update the min diff
            minDiff = diff
            // empty the resulting array
            closest = []
        }
        // if the current diff is equal to the min one
        if (diff === minDiff) {
            // append two values to the resulting array
            closest.push(...[arr[i], arr[i+1]])
        }
    }

    return closest
}

console.log(closestNumbers(arr))