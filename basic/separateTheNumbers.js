/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

A numeric string, s, is beautiful if it can be split into a sequence of two or more positive integers,
a[1], a[2],..., a[n], satisfying the following conditions:

1. a[i] - a[i-1] = 1 for any 1 < i <= n (i.e., each element in the sequence is 1 more than the previous element).
2. No a[i] contains a leading zero. For example, we can split s = 10203 into the sequence {1,02,03}, but it is not
beautiful because 02 and 03 have leading zeroes.
3. The contents of the sequence cannot be rearranged. For example, we can split s = 312 into the sequence {3,1,2},
but it is not beautiful because it breaks our first constraint (i.e., 1 - 3 is not equal to 1).

Print whether or not the string is beautiful.
If it is beautiful, print 'YES x', where x is the first number of the increasing sequence.
If there are multiple such values of x, choose the smallest. Otherwise, print 'NO'.

Example:
s = '1234'
result = 'YES 1'
 */

const s = '99910001001'

function separateNumbers(s) {
    // if the length of the given string is less than 2 we want to print 'NO' instantly
    if (s.length < 2) {
        console.log('NO')
        return
    }

    // prepare the first number as a BigInt
    let first = BigInt(0)

    // check every digit up to the half of the length of the string
    for (let i = 0; i < s.length / 2; i++) {
        // generate the first number by appending i-th digit
        first = first * 10n + BigInt(parseInt(s[i]))
        // track the previous number
        let prev = first
        // prepare a string to store a hypothetical beautiful string
        let str = first.toString()
        // loop until the hypothetical beautiful string less then the given string
        while(str.length < s.length) {
            // update the previous value by adding 1 to it
            prev = prev + 1n
            // add to a string next value increased by 1
            str += prev.toString()
        }

        // if our generated hypothetical beautiful string equals to the given one we have a success
        if (str === s) {
            console.log(`YES ${first}`)
            return
        }
    }

    // all the other cases mean the given string is not beautiful
    console.log('NO')
}

separateNumbers(s)