/*
HackerRank problem
My web-site http://upmate.io

Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending.
Determine if the columns are also in ascending alphabetical order, top to bottom.
Return YES if they are or NO if they are not.

Example:
grid = ['abc', 'adc', 'efg']
The rows are already in alphabetical order.
The columns a a e, b d f and c e g are also in alphabetical order, so the answer would be YES.
Only elements within the same row can be rearranged. They cannot be moved to a different row.
 */

const grid = ['zbc', 'ade', 'efg']

function gridChallenge(grid) {
    // convert the given array into 2d array and sort the 2-d level
    const arr = grid.map(v => v.split('').sort())

    // loop through rows except the last one
    for (let i = 0; i < grid.length-1; i++) {
        // loop though columns
        for (let j = 0; j < grid[i].length; j++) {
            // check if the char code of the current column and row is greater than the char code of the next row
            // with the same column. If so the order is not alphabetical
            if (grid[i][j].charCodeAt(0) > arr[i+1][j].charCodeAt(0)) return 'NO'
        }
    }
    // otherwise all the columns have alphabetical order of characters
    return 'YES'
}

console.log(gridChallenge(grid))