/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

A weighted string is a string of lowercase English letters where each letter has a weight.
Character weights are 1 to 26 from a to z (a-1,b-2,c-3,...).
The weight of a string is the sum of the weights of its characters (apple = 1+16+16+12+5 = 50).
A uniform string consists of a single character repeated zero or more times.
For example, 'ccc' and 'a' are uniform strings, but 'bcb' and 'cd' are not.
Given a string, s, let U be the set of weights for all possible uniform contiguous substrings of string s.
There will be n queries to answer where each query consists of a single integer.
Create a return array where for each query, the value is Yes if U contains query[i]. Otherwise, append No.

Example:
s = 'abbcccdddd'
queries = [1,7,5,4,15]

string  weight
a       1
b       2
bb      4
c       3
cc      6
ccc     9
d       4
dd      8
ddd     12
dddd    16

result = ['Yes','No','No','Yes','No']
 */

const s = 'abbcccdddd'
const queries = [1,7,5,4,15]

function weightedUniformStrings(s, queries) {
    // hash table of weights
    const weights = new Set()
    // sum of weights of duplicate characters
    let sum = 0

    // loop through the whole string
    for (let i = 0; i < s.length; i++) {
        // if the current char is not a duplicate set sum to 0
        if (s[i-1] !== s[i]) sum = 0
        // add the weight of the char to the sum variable
        sum += s[i].charCodeAt(0) - 97 + 1
        // add the current sum to the hash table
        weights.add(sum)
    }

    // loop through the queries and check if there is a value in our hash table
    // return altered array filled with answers 'Yes' or 'NO'
    return queries.map(val => (weights.has(val) ? 'Yes' : 'No'))
}

console.log(weightedUniformStrings(s, queries))