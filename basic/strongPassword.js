/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Louise joined a social networking site to stay in touch with her friends.
The signup page required her to input a name and a password. However, the password must be strong.
The website considers a password to be strong if it satisfies the following criteria:

- Its length is at least 6.
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character. The special characters are: !@#$%^&*()-+

She typed a random string of length  in the password field but wasn't sure if it was strong.
Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Example:
password = '2bbbb'
result = 2

password = '2bb#A'
result = 1
 */

const n = 11
const password = '#HackerRank'

function minimumNumber(n, password) {
    // counter for required characters
    let required = 0
    // convert the given string to an array to be able to use .some() function
    const arr = password.split('')

    // create sets of characters
    const numbers = new Set("0123456789")
    const lowerCase = new Set("abcdefghijklmnopqrstuvwxyz")
    const upperCase = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    const specialChar = new Set("!@#$%^&*()-+")

    // check presence of required characters and increase the counter if it's not in there
    if (!arr.some(char => numbers.has(char))) required++
    if (!arr.some(char => lowerCase.has(char))) required++
    if (!arr.some(char => upperCase.has(char))) required++
    if (!arr.some(char => specialChar.has(char))) required++

    // return remaining length OR count of remaining required characters depending on which is greater
    return Math.max(6-n, required)
}

console.log(minimumNumber(n,password))