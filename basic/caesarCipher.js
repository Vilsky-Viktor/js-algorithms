/*
HackerRank problem
My web-site http://upmate.io

Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters.
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet.
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Example:
s = ''
k = ''

result = 'okffng-Qwvb'
 */

const s = 'middle-Outz'
const k = 2

function caesarCipher(s, k) {
    let newString = ''

    // loop through the whole string
    for (let i = 0; i < s.length; i++) {
        // get a char code of the current letter
        const code = s.charCodeAt(i)
        // check if the letter is in range of lowercase codes
        if (code >= 97 && code <= 122) {
            // normalize the char code to be 0-indexed, rotate it by k value with help of modulo and put back to the
            // char codes range (26 - number of letters in the alphabet)
            newString += String.fromCharCode((code - 97 + k) % 26 + 97)
        // check if the letter is in range of uppercase codes
        } else if (code >= 65 && code <= 90) {
            // the same like in previous case using uppercase code range
            newString += String.fromCharCode((code - 65 + k) % 26 + 65)
        // in case the current char is not a letter
        } else {
            // just leave as it is
            newString += s[i]
        }
    }

    return newString
}

console.log(caesarCipher(s, k))