/*
HackerRank problem
My web-site http://upmate.io

You are choreographing a circus show with various animals.
For one act, you are given two kangaroos on a number line ready to jump in the positive direction
(i.e, toward positive infinity).

- The first kangaroo starts at location x1 (always less than x2) and moves at a rate of v1 meters per jump.
- The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show.
If it is possible, return YES, otherwise return NO.

Example:
x1 = 0
v1 = 3
x2 = 4
v2 = 2
result 'YES'

 */

const x1 = 0
const v1 = 3
const x2 = 4
const v2 = 2

function kangaroo(x1, v1, x2, v2) {
    // the initial formula is x1 + (v1 * j) = x2 + (v2 * j). Let's reduce the equation
    // x1 + (v1 * j) - (v2 * j) = x2
    // x1 + j(v1 - v2) = x2
    // j(v1 - v2) = x2 - x1
    // j = (x2 - x1) / (v1 - v2)
    // the result of the division will be an integer or a float. If it's an integer they will intercept. Use modulo for
    // this purpose. Also we have to check if the first kangaroo is faster. Otherwise it will never catch up.
    return (v1 > v2 && (x2-x1) % (v1-v2) === 0) ? 'YES' : 'NO'
}

console.log(kangaroo(x1, v1, x2, v2))