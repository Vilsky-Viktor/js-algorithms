/*
HackerRank problem
My web-site http://upmate.io

Two people are playing game of Misère Nim. The basic rules for this game are as follows:

- The game starts with n piles of stones indexed from 0 to n - 1. Each pile i (where 0 <= i < n) has s(i) stones.
- The players move in alternating turns.
  During each move, the current player must remove one or more stones from a single pile.
- The player who removes the last stone loses the game.

Given the value of n and the number of stones in each pile, determine whether the person who wins the game is the
 first or second person to move.
If the first player to move wins, print First on a new line; otherwise, print Second.
Assume both players move optimally.

Example:
s = [1,1,1]
In this case, player 1 picks a pile, player 2 picks a pile and player 1 has to choose the last pile.
Player 2 wins so return Second.

s = [1,2,2]
There is no permutation of optimal moves where player 2 wins.
For example, player 1 chooses the first pile.
If player 2 chooses 1 from another pile, player 1 will choose the pile with 2 left.
If player 2 chooses a pile of 2, player 1 chooses 1 from the remaining pile leaving the last stone for player 2.
Return First.
 */

const s = [2, 1, 3]

function misereNim(s) {
    // calculate sum of all the stones in all the piles
    let sumTotal = s.reduce((acc,val) => acc + val, 0)
    // if all the piles have just one stone in each then we define the winner by even or odd number of piles
    if (sumTotal === s.length) return (sumTotal % 2 === 0) ? "First" : "Second"

    // otherwise we use XOR operator according to the Game Theory and grundy number
    let xorTotal = s.reduce((acc,val) => acc ^ val, 0)
    return xorTotal === 0 ? "Second" : "First"
}

console.log(misereNim(s))