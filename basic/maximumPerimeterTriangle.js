/*
HackerRank problem
My web-site http://upmate.io

Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible
perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

If there are several valid triangles having the maximum perimeter:

- Choose the one with the longest maximum side.
- If more than one has that maximum, choose from them the one with the longest minimum side.
- If more than one has that maximum as well, print any one them.
- If no non-degenerate triangle exists, return [-1].

Example:
sticks = [1,2,3,4,5,10]
The triplet (1,2,3) will not form a triangle.
Neither will (4,5,10) or (2,3,5), so the problem is reduced to (2,3,4) and (3,4,5).
The longest perimeter is 3 + 4 + 5 = 12.
 */

const sticks = [2,3,4]

function maximumPerimeterTriangle(sticks) {
    // sort the array of sticks (asc)
    sticks.sort((a,b) => a - b)

    // loop through the array of sticks from the end to the 3d item
    for (let i = sticks.length - 1; i > 1; i--) {
        // if the current stick length is less than sum of the 2 previous ones
        if (sticks[i] < sticks[i-1] + sticks[i-2]) {
            // return the result by slicing the matched triangle
            return sticks.slice(i-2, i+1)
        }
    }

    // otherwise there is no sufficient set of sticks to complete non-degenerate triangle
    return [-1]
}

console.log(maximumPerimeterTriangle(sticks))