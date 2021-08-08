/*
HackerRank problem
My web-site http://upmate.io

This is a staircase of size n = 4:

   #
  ##
 ###
####

Its base and height are both equal to n.
It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
 */

const n = 5

function staircase(n) {
    let string = ''
    // loop through the range from 0 to n-1 (rows)
    for (let i = 0; i < n; i++) {
        // loop backwards from n-1 to 0 (columns)
        for (let j = n-1; j >= 0; j--) {
            // if the row num is greater or equal to the column num then we add #
            // otherwise space
            string += (i >= j) ? '#' : ' '
        }
        // after each row add a new line
        string += '\n'
    }
    console.log(string)
}

staircase(n)