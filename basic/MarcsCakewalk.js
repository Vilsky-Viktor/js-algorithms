/*
HackerRank problem
My web-site http://upmate.io

Marc loves cupcakes, but he also likes to stay fit.
Each cupcake has a calorie count, and Marc can walk a distance to expend those calories.
If Marc has eaten  cupcakes so far, after eating a cupcake with  calories he must walk at least  miles
to maintain his weight.

Example:
calorie = [5,10,7]
If he eats the cupcakes in the order shown, the miles he will need to walk are
(2**0 * 5) + (2**1 * 10) + (2**2 * 7) = 53.
This is not the minimum, though, so we need to test other orders of consumption.
In this case, our minimum miles is calculated as (2**0 * 10) + (2**1 * 7) + (2**2 * 5) = 44.

Given the individual calorie counts for each of the cupcakes, determine the minimum number of miles
Marc must walk to maintain his weight. Note that he can eat the cupcakes in any order.
 */

const calorie = [5,10,7]

function marcsCakewalk(calorie) {
    // sort the array of calories in desc order
    calorie.sort((a,b) => b-a)
    // return sum of operations on each cake
    return calorie.reduce((a,v,i) => a += 2**i * v, 0)
}

console.log(marcsCakewalk(calorie))