/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Consider an array of numeric strings where each string is a positive number with anywhere from 1 to 10^6 digits.
Sort the array's elements in non-decreasing, or ascending order of their integer values and return the sorted array.
 */

const unsorted = ['6', '31415926535897932384626433832795', '1', '3', '10', '3', '5']

function bigSorting(unsorted) {
    // sort an array in a custom ways
    unsorted.sort((a,b) => {
        // compare lengths of two numbers
        if (a.length < b.length) return -1
        else if (a.length > b.length) return 0

        // if lengths are same convert both to BigInt and check if a - b < 0
        if (BigInt(a) - BigInt(b) < 0n) return -1
        else return 0
    })
    return unsorted
}

console.log(bigSorting(unsorted))