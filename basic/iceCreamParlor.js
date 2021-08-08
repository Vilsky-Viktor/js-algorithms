/*
Two friends like to pool their money and go to the ice cream parlor.
They always choose two distinct flavors and they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

Example:
m = 6
arr = [1,3,4,5,6]
The two flavors that cost 1 and 5 meet the criteria. Using 1-based indexing, they are at indices 1 and 4.
 */

const m = 4
const arr = [1,4,5,3,2]

function icecreamParlor(m, arr) {
    // create a hash map to store values and their indexes
    const storage = new Map()
    // loop through the whole array
    for (let i = 0; i < arr.length; i++) {
        // calculate a compliment
        const compliment = m - arr[i]
        // check if there is a compliment value in the storage
        if (storage.has(compliment)) {
            // if there is - return indexes normalized to 1-based index
            return [storage.get(compliment) + 1, i + 1]
        }
        // otherwise add the current value and its index to the storage
        storage.set(arr[i], i)
    }
    // if the loop doesn't return anything - there are no two values which add up to the target sum
    return []
}

console.log(icecreamParlor(m, arr))