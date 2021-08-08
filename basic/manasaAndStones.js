/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Manasa is out on a hike with friends. She finds a trail of stones with numbers on them.
She starts following the trail and notices that any two consecutive stones' numbers differ by one of two values.
Legend has it that there is a treasure trove at the end of the trail.
If Manasa can guess the value of the last stone, the treasure will be hers.

She finds 2 stones and their differences are a = 2 or b = 3.
We know she starts with a 0 stone not included in her count. The permutations of differences for the two stones are
[2,2], [2,3], [3,2] or [3,3]. Looking at each scenario, stones might have [2,4], [2,5], [3,5] or [3,6] on them.
The last stone might have any of 4, 5 or 6 on its face.

Compute all possible numbers that might occur on the last stone given a starting stone with a  on it,
a number of additional stones found, and the possible differences between consecutive stones. Order the list ascending.
 */

const n = 5
const a = 3
const b = 23

function stones(n, a, b) {
    // define minimum possible result value
    const min = Math.min((n-1) * a, (n-1) * b)
    // create an array with a first calculated minimum
    const res = [min]

    // if 1st and 2d possible diffs are same then we have the only distinct answer and we can return the result
    if (a === b) return res

    // the number of results equals to the number of stones
    while(res.length !== n) {
        // each next result value is greater than the previous by the absolute diff of the given differences
        res.push(res[res.length - 1] + Math.abs(a-b))
    }

    return res
}

console.log(stones(n, a, b))