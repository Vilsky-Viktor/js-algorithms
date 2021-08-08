/*
HackerRank problem
My web-site http://upmate.io

Poker Nim is another 2-player game that's a simple variation on a Nim game. The rules of the games are as follows:
- The game starts with n piles of chips indexed from 0 to n-1. Each pile i (where 0 <= i < n) has  chips.
- The players move in alternating turns. During each move, the current player must perform either of the following
 actions:
  - Remove one or more chips from a single pile.
  - Add one or more chips to a single pile.
  - At least 1 chip must be added or removed during each turn.
- To ensure that the game ends in finite time, a player cannot add chips to any pile i more than k times.
- The player who removes the last chip wins the game.

Given the values of n, k, and the numbers of chips in each of the n piles, determine whether the person who wins the
 game is the first or second person to move. Assume both players move optimally.

print the name of the winner on a new line (i.e., either First or Second).
 */

const k = 5
const c = [2,1,3]

function pokerNim(k, c) {
    // k does not affect anyhow the result of the game.
    // Just solve it using Game Theory with a grundy and xoring all the sub-game results
    const xor = c.reduce((a,v) => a ^ v, 0)
    // The first player always win if the result of xor is non-zero
    return xor ? "First" : "Second"
}

console.log(pokerNim(k, c))