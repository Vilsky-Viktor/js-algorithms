/*
HackerRank problem
My web-site http://upmate.io

Nim is the most famous two-player algorithm game. The basic rules for this game are as follows:

- The game starts with a number of piles of stones. The number of stones in each pile may not be equal.
- The players alternately pick up 1 or more stones from 1 pile
- The player to remove the last stone wins.

For example, there are n = 3 piles of stones having [3,2,4] stones in them. Play may proceed as follows:

Player  Takes           Leaving
                        pile=[3,2,4]
1       2 from pile[1]  pile=[3,4]
2       2 from pile[1]  pile=[3,2]
1       1 from pile[0]  pile=[2,2]
2       1 from pile[0]  pile=[1,2]
1       1 from pile[1]  pile=[1,1]
2       1 from pile[0]  pile=[0,1]
1       1 from pile[1]  WIN

Given the value of n and the number of stones in each pile, determine the game's winner if both players play optimally.
 */

const piles = [2,1,4]

function nimGame(piles) {
    // according to a Game Theory the first player always wins if XOR of grundies of all the sub-games is not 0
    // since we can remove any number of stones the grundy of each pile will be the number of stones in it
    // so we just have to XOR all the values from the given array
    let res = piles.reduce((acc, val) => acc ^ val, 0)
    // if the result of XOR equals to 0 then the second player is a winner
    return res === 0 ? "Second" : "First"
}

console.log(nimGame(piles))