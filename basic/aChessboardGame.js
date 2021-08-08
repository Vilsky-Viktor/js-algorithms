/*
HackerRank problem
My web-site http://upmate.io

Two players are playing a game on a 15x15 chessboard. The rules of the game are as follows:

- The game starts with a single coin located at some x,y coordinates.
  The coordinates of the upper left cell are (1,1), and of the lower right cell are (15,15).

- In each move, a player must move the coin from cell (x,y) to one of the following locations:
    - (x-2, y+1)
    - (x-2, y-1)
    - (x+1, y-2)
    - (x-1, y-2)

Note: The coin must remain inside the confines of the board.

- Beginning with player 1, the players alternate turns. The first player who is unable to make a move loses the game.

Given the initial coordinates of the players' coins, assuming optimal play, determine which player will win the game.
 */

const x = 13
const y = 15

function chessboardGame(x, y) {
    // if we build a matrix of wins for each cell of the board we will define a pattern where each player wins in
    // squares of 4 cells (first algorithm to get matrix can be written using Game Theory with grundy number)
    // if we calculate remainder of division x and y by 4 we will see a pattern where first player always win in
    // case x % 4 or y % 4 equal to 0 or 3
    x = x % 4
    y = y % 4
    return (y === 0 || y === 3 || x === 0 || x === 3) ? "First" : "Second"
}

console.log(chessboardGame(x,y))

