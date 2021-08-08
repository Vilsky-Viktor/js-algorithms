/*
HackerRank problem
My web-site http://upmate.io

Priyanka works for an international toy company that ships by container.
Her task is to the determine the lowest cost way to combine her orders for shipping.
She has a list of item weights. The shipping company has a requirement that all items loaded in a container must weigh
less than or equal to 4 units plus the weight of the minimum weight item.
All items meeting that requirement will be shipped in one container.

What is the smallest number of containers that can be contracted to ship the items based on the given list of weights?

For example, there are items with weights w = [1,2,3,4,5,10,11,12,13].
This can be broken into two containers: [1,2,3,4,5] and [10,11,12,13].
Each container will contain items weighing within 4 units of the minimum weight item.

The function should return the minimum number of containers required to ship toys.
 */

const w = [1,2,3,4,5,10,11,12,13]

function toys(w) {
    return w
        // sort the array (asc)
        .sort((a,b) => a - b)
        // start counter with 1 and track the min value. Each time the current value is greater than minItem + 4
        // increment counter and update minItem with the current value. Return the value of the counter (index 1)
        .reduce(([minItem, count], v) =>
            (v > minItem + 4) ? [v, ++count] : [minItem, count], [w[0], 1])[1]
}

console.log(toys(w))