/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

You are given a square map as a matrix of integer strings. Each cell of the map has a value denoting its depth.
We will call a cell of the map a cavity if and only if this cell is not on the border of the map
and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side, or edge.

Find all the cavities on the map and replace their depths with the uppercase character X.

Example:
grid = ['1112', '1912', '1892', '1234']
result = ['1112', '1X12', '18X2', '1234']
 */

const grid = ['1112', '1912', '1892', '1234']

function cavityMap(grid) {
    // convert 1D array to 2D array
    grid = grid.map(item => item.split(''))
    // save size of the matrix
    const size = grid.length
    // loop through rows
    for (let i = 0; i < size; i++) {
        // loop through columns
        for (let j = 0; j < size; j++) {
            // ignore the 1st and the last row
            if (i === 0 || i === size - 1) continue
            // ignore the first and the last column
            if (j === 0 || j === size - 1) continue

            // denote current (central) val and top, bottom, left, right adjacent values
            const val = grid[i][j]
            const top = grid[i-1][j]
            const bottom = grid[i+1][j]
            const left = grid[i][j-1]
            const right = grid[i][j+1]

            // check if the current value is greater than all the adjacent values
            if (val > top && val > bottom && val > left && val > right) {
                // change the value to X
                grid[i][j] = 'X'
            }
        }
    }

    // return converted back 1D array
    return grid.map(item => item.join(''))
}

console.log(cavityMap(grid))