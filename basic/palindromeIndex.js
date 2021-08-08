/*
HackerRank problem
My web-site http://upmate.io

Given a string of lowercase letters in the range ascii[a-z], determine the index of a character that can be removed
to make the string a palindrome. There may be more than one solution, but any will do.
If the word is already a palindrome or there is no solution, return -1.
Otherwise, return the index of a character to remove.

Example:
s = "bcbc"
Either remove 'b' at index 0 or 'c' at index 3.
result = 0 OR 3
 */

const s = "aaab"

function palindromeIndex(s) {
    // loop though the string with two pointers from both sides to the center of the string
    for (let i = 0, j = s.length-1; i < j; i++, j--) {
        // if an i-th character is not equal to a j-th character
        if (s[i] !== s[j]) {
            // define if the remaining string is a palindrome starting from the next index from i
            let k = i+1
            let l = j
            for (; k < l; k++, l--) {
                if (s[k] !== s[l]) {
                    break
                }
            }
            // if the remaining string is a palindrome then we have to return i index
            if (k >= l) return i

            // otherwise define if the remaining string is a palindrome starting from the next index from j
            k = i
            l = j-1
            for (; k < l; k++, l--) {
                if (s[k] !== s[l]) {
                    break
                }
            }
            // if the remaining string is a palindrome then we have to return j index
            if (k >= l) return j
        }
    }

    // in all the other cases we return -1 because the string was either a palindrome initially or there was no way
    // to make it a palindrome by removal of one character
    return -1
}

console.log(palindromeIndex(s))