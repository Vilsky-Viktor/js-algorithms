/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Assume you are given the array arr = [1,2,4,5,3] indexed 0 ... 4. Store the value of a[4].
Now test lower index values successively from 0 to 3 until you reach a value that is lower than arr[4], at arr[1]
in this case.
Each time your test fails, copy the value at the lower index to the current index and print your array.
When the next lower indexed value is smaller than arr[4], insert the stored value at the current index and print
the entire array.

Example:
n = 4
arr = [1,2,4,5,3]
result:
1 2 4 5 5
1 2 4 4 5
1 2 3 4 5
 */

const n = 5
const arr = [2,4,6,8,3]

function insertionSort1(n, arr) {
    // save a digit we have to sort (always the last one according to the task)
    const target = arr[n - 1]
    // denote a start index
    let idx = n-2

    // loop through the array until current value is less then the target
    while (target < arr[idx] && idx >= 0) {
        // save overwrite the previous value with a current value
        arr[idx+1] = arr[idx]
        console.log(arr.join(' '))
        idx--
    }

    // overwrite the next index after the smaller value with our target value
    arr[idx+1] = target
    console.log(arr.join(' '))
}

insertionSort1(n,arr)