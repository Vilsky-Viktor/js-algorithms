/*
HackerRank problem
My web-site http://upmate.io

Jim's Burgers has a line of hungry customers. Orders vary in the time it takes to prepare them.
Determine the order the customers receive their orders.
Start by numbering each of the customers from 1 to n, front of the line to the back.
You will then be given an order number and a preparation time for each customer.

The time of delivery is calculated as the sum of the order number and the preparation time.
If two orders are delivered at the same time, assume they are delivered in ascending customer number order.

For example, there are n = 5 customers in line.
They each receive an order number order[i] and a preparation time prep[i].:

Customer	1	2	3	4	5
Order #		8	5	6	2	4
Prep time	3	6	2	3	3
Calculate:
Serve time	11	11	8	5	7

Complete the jimOrders function in the editor below.
It should return an array of integers that represent the order that customers' orders are delivered.
 */

const orders = [[8,1],[4,2],[5,6],[3,1],[4,3]]

function jimOrders(orders) {
    return orders
        // modify the given array by calculating serve time and saving a line number
        .map((v,i) => [i+1, v[0] + v[1]])
        // sort the array by serve time
        .sort((a,b) => a[1] - b[1])
        // convert the array to 1d array where there is only line number of each customer
        .map((v) => v[0])
}

console.log(jimOrders(orders))