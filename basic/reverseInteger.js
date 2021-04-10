
// My web-site http://upmate.io
// YouTube channel - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

/*
Given:
x - integer

Task:
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

    // save the polarity of the given integer
    const polarity = (x < 0) ? -1 : 1
    // convert to an array, reverse it and convert back to a string
    const reversed = x.toString().split('').reverse().join('')
    // convert the reversed string to a number
    const res = parseInt(reversed)

    // return result with a restored polarity
    return res * polarity
}


function reverse2(x) {
    // if the number is from 0 to 9 we return the number without conversion
    if(x >= 0 && x <= 9) return x

    // save the polarity of the given integer
    const polarity = (x < 0) ? -1 : 1
    // convert the given integer to a string
    const string = x.toString()

    // prepare a variable to concatenate characters
    let reversed = ""
    // traverse the string backwards
    for (let i = string.length - 1; i >= 0; i--) {
        // concatenate each last character to the reversed string
        reversed += string[i]
    }

    // convert the reversed string to a number
    const res = parseInt(reversed)

    // return result with a restored polarity
    return res * polarity
}


function reverse3(x) {
    // if the number is from 0 to 9 we return the number without conversion
    if(x >= 0 && x <= 9) return x

    // prepare result variable
    let result = 0

    // iterate until the given number is reduced to 0
    while(x) {
        // save the integer without the last digit
        // prevent decimals with help of bitwise OR operator
        // -321 / 10 = -32.1 | 0 = -32
        const cut = x / 10 | 0
        // add the last digit of the integer to the result value
        // -1 * 10 = -10 ... -32 % 10 = -2 ... -10 - (-2) = -12
        result = (result * 10) + (x % 10)
        // update the given integer with the 'cut' variable
        x = cut
    }

    // return reversed integer with a correct polarity
    return result
}