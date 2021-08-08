/*
Leetcode problem
My web-site http://upmate.io

Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is palindrome while 123 is not.
 */

const x = 121

function isPalindrome(x) {
    // palindrome value can not be less than 0 and have the last digit of 0
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false

    let reversed = 0

    // loop until the altered given number is greater than the reversed
    while(x > reversed) {
        // append one 0 to our reversed integer and add the last digit from the remaining num
        reversed = reversed * 10 + x % 10
        // cut the last digit from the given num and get rid of a floating point
        x = x / 10 | 0
    }

    // return result of comparison of the given integer and its reversed version
    // in case of odd number of digits the middle number does not matter so we can cut it
    return x === reversed || x === (reversed / 10 | 0)
}

console.log(isPalindrome(x))