/*
HackerRank problem
My web-site http://upmate.io

Two people are playing Nimble! The rules of the game are:

- The game is played on a line of n squares, indexed from 0 to n - 1. Each square i (where 0 <= i < n) contains  coins.
- The players move in alternating turns.
  During each move, the current player must remove exactly 1 coin from square i and move it to square j if and only
  if 0 <= j < i.
- The game ends when all coins are in square 0 and nobody can make a move.
  The first player to have no available move loses the game.

Given the value of n and the number of coins in each square, determine whether the person who wins the game is the
 first or second person to move. Assume both players move optimally.
 */

const s = [279, 590, 354, 817, 12, 229, 47, 830]

function nimbleGame(s) {
    // take this game as each coin is a pile with a height of i (square it's located in)
    // then you can solve it like a nimble game with a grundy number
    // all the coins in the same square have the same grundy number which means we have to consider only squares with
    // an odd number of coins where we have the only coin without any pair. This one coin we will XOR with all the
    // other odds from the other squares
    let totalXOR = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] % 2) totalXOR ^= i
    }

    // if the total xor has a non-zero value then the first player is a winner
    return totalXOR ? "First" : "Second"
}

console.log(nimbleGame(s))