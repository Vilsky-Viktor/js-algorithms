/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Happy Ladybugs is a board game having the following properties:
- The board is represented by a string, b, of length n. The i-th character of the string, b[i], denotes the i-th
 cell of the board.
- If b[i] is an underscore (i.e., _), it means the i-th cell of the board is empty.
- If b[i] is an uppercase English alphabetic letter (ascii[A-Z]), it means the i-th cell contains a ladybug of color.
- String  will not contain any other characters.
- A ladybug is happy only when its left or right adjacent cell (i.e., ) is occupied by another ladybug having the
 same color.
- In a single move, you can move a ladybug from its current position to any empty cell.

Given the values of n and b for g games of Happy Ladybugs, determine if it's possible to make all the ladybugs happy.
 For each game, return YES if all the ladybugs can be made happy through some number of moves. Otherwise, return NO.
 */

const b = 'AABCBC'

function happyLadybugs(b) {
    // determine if there are empty slots
    let space = false
    // hash of letters to find duplicates and single chars
    const cLetters = {}
    // define if the ladybugs are unhappy initially
    let unhappy = false

    // loop through all the letters
    for (let i = 0; i < b.length; i++) {
        // if there is at least one space - we are OK
        if (b[i] === '_') space = true
        // for all the other characters except _
        else {
            // count occurrences
            (b[i] in cLetters) ? cLetters[b[i]]++ : cLetters[b[i]] = 1
            // check if any of letters is unhappy
            if (b[i] !== b[i-1] && b[i] !== b[i+1]) unhappy = true
        }
    }

    // check if there is at least one single character
    let single = false
    for (let char in cLetters) {
        if (cLetters[char] === 1) single = true
    }

    // if we have a happy string and there is no a single char
    if (!unhappy && !single) return 'YES'
    // if there is a single char OR there is no empty slots to move characters
    if (single || !space) return 'NO'
    return 'YES'
}

console.log(happyLadybugs(b))