const arr = [5,7,4,3,8]

function quickSort(arr) {
    const left = []
    // equal contains a pivot value from a very beginning
    const equal = [arr[0]]
    const right = []

    // loop from the first index since the pivot value is already added to the middle array
    for (let i = 1; i < arr.length; i++) {
        // if the current value is greater than the pivot
        if (arr[i] > arr[0]) right.push(arr[i])
        // if the current value is less than the pivot
        else if (arr[i] < arr[0]) left.push(arr[i])
        // if there is a pivot duplicate value
        else equal.push(arr[i])
    }

    // return a merged arrays
    return [...left, ...equal, ...right]
}

console.log(quickSort(arr))