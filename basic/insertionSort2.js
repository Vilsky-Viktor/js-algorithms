/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

In this challenge, print the array after each iteration of the insertion sort, i.e.,
whenever the next element has been inserted at its correct position.
Since the array composed of just the first element is already sorted, begin printing after placing the second element.

Example:
n = 7
arr = [3,4,7,5,6,2,1]

Result:
3 4 7 5 6 2 1
3 4 7 5 6 2 1
3 4 5 7 6 2 1
3 4 5 6 7 2 1
2 3 4 5 6 7 1
1 2 3 4 5 6 7
 */

const n = 6
const arr = [1, 4, 3, 5, 6, 2]

function insertionSort2(n, arr) {
    // loop through the whole array starting from index 1
    for (let i = 1; i < n; i++) {
        // define index prior to i
        let j = i - 1
        // save current value of i-th array element
        const target = arr[i]
        // loop until value of j-th element is less than or equal to a target
        while (arr[j] > target) {
            // copy value of the current j element to the next j element
            arr[j+1] = arr[j]
            // decrement the j index
            j--
        }
        // once the loop is done put target value to the next j index to finish sorting of our left part of the array
        arr[j+1] = target
        // log the resulting array of the current iteration in shape of a space separated string of numbers
        console.log(arr.join(' '))
    }
}

insertionSort2(n,arr)