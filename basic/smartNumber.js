/*
HackerRank problem
My web-site http://upmate.io

A number is called a smart number if it has an odd number of factors.
Given some numbers, find whether they are smart numbers or not.
Debug the given function isSmartNumber to correctly check if a given number is a smart number.
Note: You can modify only one line in the given code and you cannot add or remove any new lines.
 */

const num = 9

function isSmartNumber(num) {
    // to define if the num has an odd number of factors we have to get square root of the num and multiply it by itself
    // In case it ends up with an initial number then we have an odd number of factors and our number is smart
    const sqrt = Math.sqrt(num)
    return sqrt * sqrt === num
}

console.log(isSmartNumber(num))