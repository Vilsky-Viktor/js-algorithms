/*
HackerRank problem
My web-site http://upmate.io

Given a square matrix, calculate the absolute difference between the sums of its diagonals.
For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9

The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is |15-17| = 2.
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
 */

const arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    let left = 0, right = 0
    // loop through the given array with two pointers from both sides
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        // accumulate sum of both diagonals
        left += arr[i][i]
        right += arr[j][i]
    }
    // calculate absolute diff
    return Math.abs(left - right)
}

console.log(diagonalDifference(arr))