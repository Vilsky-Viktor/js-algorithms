/*
HackerRank problem
My web-site http://upmate.io

James found a love letter that his friend Harry has written to his girlfriend.
James is a prankster, so he decides to meddle with the letter.
He changes all the words in the letter into palindromes.

To do this, he follows two rules:
1. He can only reduce the value of a letter by 1, i.e. he can change d to c, but he cannot change c to d or d to b.
2. The letter  may not be reduced any further.

Each reduction in the value of any letter is counted as a single operation.
Find the minimum number of operations required to convert a given string into a palindrome.

Example:
s = cde
The following two operations are performed: cde → cdd → cdc. Return 2.
 */

const s = "c"

function theLoveLetterMystery(s) {
    let count = 0
    // loop through the half of the string with two pointers: i - start, j - end
    for (let i = 0, j = s.length-1; i < s.length/2; i++, j--) {
        // calculate absolute diff between char codes of the current char and the opposite one
        // add the diff to the count
        if (s[i] !== s[j]) count += Math.abs(s[i].charCodeAt(0) - s[j].charCodeAt(0))
    }
    return count
}

console.log(theLoveLetterMystery(s))