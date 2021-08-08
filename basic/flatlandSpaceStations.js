/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Flatland is a country with a number of cities, some of which have space stations.
Cities are numbered consecutively and each has a road of 1km length connecting it to the next city.
It is not a circular route, so the first city doesn't connect with the last city.
Determine the maximum distance from any city to its nearest space station.

Example:
n = 5
c = [0,4]
result = 2
 */

const n = 5
const c = [0, 4]

function flatlandSpaceStations(n, c) {
    // sort the input station locations
    c.sort((a,b) => a - b)
    // save the length of the given stations
    const len = c.length
    // start max with a distance from 0 to the first city with a station
    let max = c[0]
    // loop through all the stations except the last one
    for (let i = 0; i < len - 1; i++) {
        // define distance between current station and the next one
        // divide it by 2 to get the maximum distance from any city to one of them
        // update max if a new distance is bigger
        max = Math.max(max, Math.floor((c[i + 1] - c[i]) / 2))
    }

    // return current max or distance between the last station and the last city
    // depending on which is bigger
    return Math.max(max, n-1 - c[c.length-1])
}

console.log(flatlandSpaceStations(n,c))