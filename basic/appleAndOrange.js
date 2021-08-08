/*
HackerRank problem
My web-site http://upmate.io

Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:
- The red region denotes the house, where s is the start point, and t is the endpoint.
  The apple tree is to the left of the house, and the orange tree is to its right.
- Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
- When a fruit falls from its tree, it lands d units of distance from its tree of origin along the -axis.
  *A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d
  units to the tree's right. *

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e.,
 in the inclusive range [s,t])?
 */

const s = 7
const t = 11
const a = 5
const b = 15
const apples = [-2, 2, 1]
const oranges = [5, -6]

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // calculate all the fallen apples within s and t
    const aCount = apples.filter(val => a + val >= s && a + val <= t)
    // calculate all the fallen oranges within s and t
    const oCount = oranges.filter(val => b + val >= s && b + val <= t)
    console.log(aCount.length)
    console.log(oCount.length)
}

countApplesAndOranges(s,t,a,b,apples,oranges)