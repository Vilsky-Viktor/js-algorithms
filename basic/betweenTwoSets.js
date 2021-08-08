/*
HackerRank problem
My web-site http://upmate.io

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:
- The elements of the first array are all factors of the integer being considered
- The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays.
Determine how many such numbers exist.

Example:
a = [2,6]
b = [24,36]

There are two numbers between the arrays: 6 and 12.
6%2=0, 6%6=0, 24%6=0 and 36%6=0 for the first value.
12%2=0, 12%6=0 and 24%12=0, 36%12=0 for the second value. Return 2.
 */

const a = [3,4]
const b = [24,48]

function gcdTotal(arr) {
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res = gcd(res, arr[i])
    }
    return res
}

function gcd(a,b) {
    while(b > 0) {
        const temp = b
        b = a % b
        a = temp
    }
    return a
}

function lcm(a,b) {
    return a * b / gcd(a, b)
}

function lcmTotal(arr) {
    let res = arr[0]
    for (let i = 1; i < arr.length; i++) {
        res = lcm(res, arr[i])
    }
    return res
}

function getTotalX(a, b) {
    // get total lcm of the first array
    const lcm = lcmTotal(a)
    // get total gcd of the second array
    const gcd = gcdTotal(b)
    let count = 0

    // calculate all the divisors of total gcm between total lcm value and total gcd value inclusively
    for (let i = lcm; i <= gcd; i+=lcm) {
        if (gcd % i === 0) count++
    }

    return count
}

console.log(getTotalX(a,b))