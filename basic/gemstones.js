/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

There is a collection of rocks where each rock has various minerals embeded in it.
Each type of mineral is designated by a lowercase letter in the range ascii[a-z].
There may be multiple occurrences of a mineral in a rock.
A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.

Example:
arr = ['abc', 'abc', 'bc']
result = 2
 */

const arr = ['abcdde', 'baccd', 'eeabg']

function gemstones(arr) {
    // use reduce method to find an occurrence of each letter in each string
    const gems = arr.reduce((acc, rock) => {
        // remove from the accumulator letters that the current string does not contain
        return new Set([...acc].filter(x => [...rock].includes(x)))
    })
    // as a result we have a set of letters which exist in all the strings of the given array.
    return gems.size
}

console.log(gemstones(arr))