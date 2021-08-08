/*
HackerRank problem
My web-site http://upmate.io

Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.
The rules of the game are as follows:

- Initially there are n towers.
- Each tower is of height m.
- The players move in alternating turns.
- In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly
 divides x.
- If the current player is unable to make a move, they lose the game.

Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

Example:
n = 2
m = 6

There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
- remove 3 pieces from a tower to leave 3 as 6 % 3 = 0
- remove 5 pieces to leave 1
Let Player 1 remove 3. Now the towers are 3 and 6 units tall.
Player 2 matches the move. Now the towers are both 3 units tall.
Now Player 1 has only one move.
Player 1 removes 2 pieces leaving 1. Towers are 1 and 2 units tall.
Player 2 matches again. Towers are both 1 unit tall.
Player 1 has no move and loses. Return 2.
 */

const n = 1
const m = 1

function towerBreakers(n, m) {
    // player two always win if m = 1 or n is evenly dividable by 2
    // you can define this pattern by applying Game Theory with grundy numbers as the first solution
    return (m === 1 || n % 2 === 0 ? 2 : 1)
}

console.log(towerBreakers(n,m))

