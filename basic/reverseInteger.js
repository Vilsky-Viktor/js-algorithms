/*
Leetcode problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Revert the given integer

Example:
x = -321
result = -123
*/

// our arguments
const x = -321

function reverse(x) {
    // if the number is from 0 to 9 we return the number without conversion
    if(x >= 0 && x <= 9) return x

    // prepare result variable
    let reversed = 0

    // iterate until the given number is reduced to 0
    while(x) {
        // save the integer without the last digit
        // prevent decimals with help of bitwise OR operator
        // -321 / 10 = -32.1 | 0 = -32
        const cut = x / 10 | 0

        // check if we don't get an overflow
        if (reversed > 2**31 / 10 || (reversed === 2**31 / 10 && cut > 7)) return 0
        if (reversed < (-2)**31 / 10 || (reversed === (-2)**31 / 10 && cut < -8)) return 0

        // add the last digit of the integer to the result value
        // -1 * 10 = -10 ... -32 % 10 = -2 ... -10 - (-2) = -12
        reversed = reversed * 10 + x % 10
        // update the given integer with the 'cut' variable
        x = cut
    }

    // return reversed integer with a correct polarity
    return reversed
}

console.log(reverse(x))