/*
HackerRank problem
My web-site http://upmate.io

Dothraki are planning an attack to usurp King Robert's throne.
King Robert learns of this conspiracy from Raven and plans to lock the single door through which the enemy
can enter his kingdom.

But, to lock the door he needs a key that is an anagram of a palindrome.
He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome.
Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.

Example:
s = 'aabbccdd'
One way this can be arranged into a palindrome is abcddcba. Return YES.
 */

const s = 'cdcdcdcdeeeef'

function gameOfThrones(s) {
    // create a hash table for counting number of occurrences of unique characters
    const hash = {}

    // loop though the given string
    for (let char of s) {
        // fill the hash table with a data
        hash[char] ? hash[char]++ : hash[char] = 1
    }

    // calculate sum of division remainders of letter occurrences divided by 2
    const count = Object.keys(hash).reduce((acc, char) => acc + hash[char] % 2, 0)
    // if sum of remainders 0 then we have all the characters in pairs
    // if sum of remainders 1 then we have odd string length with all the characters in pairs except the only char
    // in the middle
    // otherwise the string can not be converted to a palindrome
    return (!count || count === 1) ? 'YES' : 'NO'
}

console.log(gameOfThrones(s))