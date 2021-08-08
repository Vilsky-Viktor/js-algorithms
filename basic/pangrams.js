/*
HackerRank problem
My web-site http://upmate.io

A pangram is a string that contains every letter of the alphabet.
Given a sentence determine whether it is a pangram in the English alphabet.
Ignore case. Return either 'pangram' or 'not pangram' as appropriate.

Example:
s = 'We promptly judged antique ivory buckles for the next prize'
result = 'pangram'
 */

const s = 'We promptly judged antique ivory buckles for the next prize'

function pangrams(s) {
    // create a set of unique letters
    const set = new Set()

    // loop through the given string converted to a lowercase
    for (let char of s.toLowerCase()) {
        // check if the current char is a letter (not space, !@#$%^&* ...)
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            // add the current char to the set
            set.add(char)
        }
    }

    // return 'pangram' if the set has all the 26 letters of the alphabet
    return set.size === 26 ? 'pangram' : 'not pangram'
}

console.log(pangrams(s))