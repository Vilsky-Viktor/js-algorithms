/*
HackerRank problem
My web-site http://upmate.io

Two players called P1 and P2 are playing a game with a starting number of stones.
Player 1 always plays first, and the two players move in alternating turns. The game's rules are as follows:
- In a single move, a player can remove either 2, 3, or 5 stones from the game board.
- If a player is unable to make a move, that player loses the game.

Given the starting number of stones, find and print the name of the winner.
P1 is named First and P2 is named Second.
Each player plays optimally, meaning they will not make a move that causes them to lose the game
if a winning move exists.

For example, if n = 4, P1 can make the following moves:

- P1 removes 2 stones leaving 2. P2 will then remove 2 stones and win.
- P1 removes 3 stones leaving 1. P2 cannot move and loses.
P1 would make the second play and win the game.

Complete the gameOfStones function. It should return a string, either First or Second.
 */

const n = 8

function gameOfStones(n) {
    // mod 7 is taken because there is a repeatable pattern which you can define by testing the working function
    // with inputs from 1 to 20. To get a first working solution you can use a Game Theory with grundy number.
    // if remainder of division is less than 2 then the second player is a winner. Otherwise the first one.
    return n % 7 < 2 ? 'Second' : 'First'
}

console.log(gameOfStones(n))