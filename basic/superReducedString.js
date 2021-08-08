/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Reduce a string of lowercase characters in range ascii[‘a’..’z’] by doing a series of operations. In each operation,
 select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return the resulting string.
If the final string is empty, return 'Empty String'.

Example:
s = 'abba'
result = ''

s = 'abb'
result = 'a'
 */

const s = 'baab'

function superReducedString(s) {
    // create a stack
    const stack = []
    // loop through the given string
    for(let char of s) {
        // pop the last character from the stack if the current character equals to it
        if (stack.length && stack[stack.length-1] === char) stack.pop()
        // otherwise add the current char to the stack
        else stack.push(char)
    }
    // if the stack is empty
    if (!stack.length) return 'Empty String'
    // otherwise return a string by joining the stack
    return stack.join('')
}

console.log(superReducedString(s))