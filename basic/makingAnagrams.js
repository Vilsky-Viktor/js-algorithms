/*
HackerRank problem
My web-site http://upmate.io

We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second
string. In other words, both strings must contain the same exact letters in the same exact frequency.
For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful.
She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum
number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, s1 and s2, that may not be of the same length, determine the minimum number of character deletions
required to make s1 and s2 anagrams. Any characters can be deleted from either of the strings.

Example:
s1 = 'abc'
s2 = 'amnop'
The only characters that match are the a's so we have to remove bc from s1 and nmop from s2 for a total of 6 deletions.
 */

const s1 = 'absdjkvuahdakejfnfauhdsaavasdlkj'
const s2 = 'djfladfhiawasdkjvalskufhafablsdkashlahdfa'

function makingAnagrams(s1, s2) {
    // counter of all the occurrences of unique characters of the first string
    const hash1 = {}
    // counter of all the occurrences of unique characters of the second string
    const hash2 = {}

    // define indexes for the loop through two strings
    let idx1 = s1.length
    let idx2 = s2.length

    // loop until both strings' indexes become 0
    while (idx1 > 0 || idx2 > 0) {
        // fill our hash counters with data
        if (idx1 > 0) hash1[s1[idx1-1]] ? hash1[s1[idx1-1]]++ : hash1[s1[idx1-1]] = 1
        if (idx2 > 0) hash2[s2[idx2-1]] ? hash2[s2[idx2-1]]++ : hash2[s2[idx2-1]] = 1
        // decrease the indexes
        idx1--;idx2--
    }

    // calculate how many common characters the two strings contain
    const count = Object.keys(hash1).reduce((acc, char) => {
        return hash2[char] ? acc + Math.min(hash2[char], hash1[char]) : acc
    }, 0)

    // subtract from each string's length number of common characters and return sum of results
    return (s1.length - count) + (s2.length - count)
}

console.log(makingAnagrams(s1,s2))