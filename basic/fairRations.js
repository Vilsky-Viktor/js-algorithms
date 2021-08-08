/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

You are the benevolent ruler of Rankhacker Castle, and today you're distributing bread.
Your subjects are in a line, and some of them already have some loaves.
Times are hard and your castle's food stocks are dwindling, so you must distribute as few loaves as possible
according to the following rules:

1. Every time you give a loaf of bread to some person, you must also give a loaf of bread to the person immediately
in front of or behind them in the line (i.e., persons  or ).
2. After all the bread is distributed, each person must have an even number of loaves.

Given the number of loaves already held by each citizen, find and print the minimum number of loaves you must
distribute to satisfy the two rules above. If this is not possible, print NO.

Example:
input = [4,5,6,7]
result = 4
 */

const input = [4,5,6,6,7,6,6,5,6,6,7]

function fairRations(B) {
    // last index of an odd number
    let lastId = null
    // count of loaves
    let count = 0
    // loop through the given array of people
    for (let i = 0; i < B.length; i++) {
        // check if the current item is odd number
        if (B[i] % 2 !== 0) {
            // if lastId is not defined - save the current index
            if (lastId === null) lastId = i
            // if the last ID is saved then we have a previous odd number
            else {
                // calculate a distance between previous and current indexes
                // multiply distance by 2 loaves and update the count
                count += (i - lastId) * 2
                // set last ID to null in order to calculate distances only between pairs of odds
                lastId = null
            }
        }
    }

    // if last ID is null that means we have even number of odds and we can return count
    // otherwise we have got an odd number of odds and it's impossible to get all the numbers even
    return (lastId === null) ? count : 'NO'
}

console.log(fairRations(input))