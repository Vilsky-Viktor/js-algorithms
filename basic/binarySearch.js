/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

This is a simple challenge to get things started. Given a sorted array (arr) and a number (V),
can you print the index location of V in the array?

Example:
arr = [1,2,3]
V = 3
result = 2
 */

const V = 11
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]

function introTutorial(V, arr) {
    let idxL = 0
    let idxR = arr.length - 1

    while(idxR >= idxL) {
        const mid = Math.floor((idxR + idxL) / 2)
        if (arr[mid] === V) return mid
        else if (arr[mid] > V) idxR = mid - 1
        else idxL = mid + 1
    }

    return -1
}

console.log(introTutorial(V, arr))
