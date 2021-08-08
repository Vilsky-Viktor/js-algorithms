/*
HackerRank problem
My web-site http://upmate.io

Sherlock Holmes suspects his archenemy Professor Moriarty is once again plotting something diabolical.
Sherlock's companion, Dr. Watson, suggests Moriarty may be responsible for MI6's recent
issues with their supercomputer, The Beast.

Shortly after resolving to investigate, Sherlock receives a note from Moriarty boasting about
infecting The Beast with a virus.
He also gives him a clue: an integer.
Sherlock determines the key to removing the virus is to find the largest Decent Number having that number of digits.

A Decent Number has the following properties:
- Its digits can only be 3's and/or 5's.
- The number of 3's it contains is divisible by 5.
- The number of 5's it contains is divisible by 3.
- It is the largest such number for its length.

Moriarty's virus shows a clock counting down to The Beast's destruction, and time is running out fast.
Your task is to help Sherlock find the key before The Beast is destroyed!

For example, the numbers 55533333 and 555555 are both decent numbers because there are 3 5's and 5 4's in the first,
 and 6 5's in the second.
They are the largest values for those length numbers that have proper divisibility of digit occurrences.

Example:
n = 11
result = '55555533333'
 */

const n = 2194

function decentNumber(n) {
    // if num length divided by 3 has a remainder of 0 we return string filled with only 5's
    if (n%3 === 0 && n !== 0) {
        console.log( Array(n).fill(5).join(''))
    // if num length divided by 3 has a remainder of 1 and greater than or equal 10 we return string
    // filled with 10 3's and all the other 5's
    } else if (n%3 === 1 && n >= 10) {
        console.log([...Array(n-10).fill(5), ...Array(10).fill(3)].join(''))
    // if num length divided by 3 has a remainder of 2 and greater than or equal 5 we return string
    // filled with 5 3's and all the other 5's
    } else if (n%3 === 2 && n >= 5){
        console.log([...Array(n-5).fill(5), ...Array(5).fill(3)].join(''))
    // otherwise we cannot generate a decent number
    } else {
        console.log(-1)
    }
}

decentNumber(n)