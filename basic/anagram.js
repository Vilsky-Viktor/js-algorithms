/*
HackerRank problem
My web-site http://upmate.io

Two words are anagrams of one another if their letters can be rearranged to form the other word.
Given a string, split it into two contiguous substrings of equal length.
Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

Example:
s = 'abccde'
Break  into two parts: 'abc' and 'cde'.
Note that all letters have been used, the substrings are contiguous and their lengths are equal.
Now you can change 'a' and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams.
Two changes were necessary.
 */

const s = 'fdhlvosfpafhalll'

function anagram(s) {
    // hash table to store count of chars of the first string
    let hash = {}
    // hash table to store count of chars of the second string
    let hash2 = {}

    // if the given string has odd number of characters - return -1
    if (s.length % 2 !== 0) return -1

    // calculate number occurrences of each character for each string
    for (let i = 0, j = s.length-1; i < j; i++, j--) {
        hash[s[i]] ? hash[s[i]]++ : hash[s[i]] = 1
        hash2[s[j]] ? hash2[s[j]]++ : hash2[s[j]] = 1
    }

    // loop through the keys of the second hash counter and return the resulting accumulator
    return Object.keys(hash2).reduce((acc, char) => {
        // if the first hash does not contain a char from the second - add to the result a number of occurrences for the
        // second string
        if (!hash[char]) return acc + hash2[char]
        // otherwise calculate a diff between occurrences in two hashes and add to the result if the diff is positive
        return acc + Math.max(0, hash2[char] - hash[char])
    }, 0)
}

console.log(anagram(s))