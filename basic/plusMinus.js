/*
Leetcode problem
My web-site http://upmate.io

Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems.
The test cases are scaled to six decimal places, though answers with absolute error of up to 10 in power of -4 are
 acceptable.

Example:
There are n = 5 elements, two positive, two negative and one zero.
Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.

Results are printed as:
0.400000
0.400000
0.200000
 */

const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    const len = arr.length
    // calculate number of occurrences of all the positive, negative and zero values
    const res = arr.reduce((a,v) => {
        if (v > 0) a[0]++
        else if (v < 0) a[1]++
        else a[2]++
        return a
    }, [0,0,0])

    // return ratios with 6 digits precision
    console.log((res[0]/len).toPrecision(6))
    console.log((res[1]/len).toPrecision(6))
    console.log((res[2]/len).toPrecision(6))
}

plusMinus(arr)