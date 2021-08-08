/*
HackerRank problem
My web-site http://upmate.io

You are in charge of the cake for a child's birthday.
You have decided the cake will have one candle for each year of their total age.
They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4,4,1,3]
The maximum height candles are 4 units high. There are 2 of them, so return 2.
 */

const candles = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
    let max = 0, count = 0

    // loop through the candles
    for (let candle of candles) {
        // if the current candle is greater than max then update max and set count to 1
        if (candle > max) {
            max = candle
            count = 1
        // if the current candle is equal to max then increment count
        } else if (candle === max) count++
    }

    return count
}

console.log(birthdayCakeCandles(candles))