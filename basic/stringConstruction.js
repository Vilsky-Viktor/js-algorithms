/*
HackerRank problem
My web-site http://upmate.io

Amanda has a string of lowercase letters that she wants to copy to a new string.
She can perform the following operations with the given costs.
She can perform them any number of times to construct a new string p:
1. Append a character to the end of string p at a cost of 1 dollar.
2. Choose any substring of p and append it to the end of p at no charge.

Given n strings s[i], find and print the minimum cost of copying each s[i] to p[i] on a new line.

For example, given a string abcabc, it can be copied for 3 dollars. Start by copying a, b and c individually at a cost
of 1 dollar per character. String abc at this time.
Copy p[0:2] to the end of p at no cost to complete the copy.
 */

const s = 'abab'

function stringConstruction(s) {
    // just calculate a number of unique characters
    return new Set(s).size
}

console.log(stringConstruction(s))