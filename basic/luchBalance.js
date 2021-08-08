/*
HackerRank problem
My web-site http://upmate.io

Lena is preparing for an important coding competition that is preceded by a number of sequential preliminary contests.
Initially, her luck balance is 0. She believes in "saving luck", and wants to check her theory.
Each contest is described by two integers, L[i] and T[i]:

- L[i] is the amount of luck associated with a contest.
  If Lena wins the contest, her luck balance will decrease by L[i];
  if she loses it, her luck balance will increase by L[i].
- T[i] denotes the contest's importance rating.
  It's equal to 1 if the contest is important, and it's equal to 0 if it's unimportant.

If Lena loses no more than  important contests, what is the maximum amount of luck she can have after competing in
all the preliminary contests? This value may be negative.

Example:
k = 2
L = [5, 1, 4]
T = [1, 2, 0]
result = 10

If Lena loses all of the contests, her will be 5 + 1 + 4 = 10.
Since she is allowed to lose 2 important contests, and there are only 2 important contests, she can lose all three
 contests to maximize her luck at 10.

If k = 1, she has to win at least 1 of the 2 important contests.
She would choose to win the lowest value important contest worth 1.
Her final luck will be 5 + 4 - 1 = 8.
 */

const k = 3
const contests = [[3, 1], [13, 1], [21, 1], [31, 1], [17, 1], [20, 1], [8, 1], [12, 0], [14, 0], [21, 1]]

function luckBalance(k, contests) {
    // sort an array (desc)
    contests.sort((a,b) => b[0] - a[0])
    // accumulate luck score
    let luck = 0

    // loop through the sorted contests
    for (let c of contests) {
        // if the contest is not important - add its score to luck
        if (c[1] === 0) luck += c[0]
        // if the contest is important and there are k skips left - add its score to luck
        else if (k > 0) {
            luck += c[0]
            // decrement k since we skipped 1 important contest
            k--
        // all the other cases mean we cannot skip important contests anymore and we subtract their score from luck
        } else luck -= c[0]
    }

    return luck
}

console.log(luckBalance(k, contests))