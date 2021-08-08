/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

In this challenge, you will determine whether a string is funny or not.
To determine whether a string is funny, create a copy of the string in reverse e.g. 'abc' -> 'cba'.
Iterating through each string, compare the absolute difference in the ascii values
of the characters at positions 0 and 1, 1 and 2 and so on to the end.
If the list of absolute differences is the same for both strings, they are funny.

Determine whether a give string is funny. If it is, return 'Funny', otherwise return 'Not Funny'.

Example:
s = 'lmnop'

[108, 109, 110, 111, 112]
[112, 111, 110, 109, 108]

For both arrays absolute diff is [1,1,1,1]
result = 'Funny'
 */

const s = 'acxz'

function funnyString(s) {
    // get all the char codes as an array
    const ascii = [...s].map(char => char.charCodeAt(0))

    // define two pointers (i - start, j - end)
    let i = 0, j = ascii.length - 1

    // loop until i equals to j
    while(i < j) {
        // return 'Not funny' if an absolute value from the start is not equal to an absolute value from the end
        if (Math.abs(ascii[i] - ascii[i+1]) !== Math.abs(ascii[j] - ascii[j-1])) return 'Not Funny'
        // increase the start pointer and decrease the end pointer
        i++; j--
    }

    // if the while loop does not return anything then the string is funny
    return 'Funny'
}

console.log(funnyString(s))