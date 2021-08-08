/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

There is a sequence of words in CamelCase as a string of letters, s, having the following properties:
- It is a concatenation of one or more words consisting of English letters.
- All letters in the first word are lowercase.
- For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
- Given s, determine the number of words in s.

Example:
s = 'saveChangesInTheEditor'
result = 5
 */

const s = 'oneTwoThree'

function camelcase(s) {
    return s.split(/[A-Z]/).length
}

console.log(camelcase(s))