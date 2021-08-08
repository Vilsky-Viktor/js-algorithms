/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

There is a strange counter. At the first second, it displays the number 3.
Each second, the number displayed by decrements by 1 until it reaches 1.
In next second, the timer resets to 2 x the initial number for the prior cycle and continues counting down.
 */

const t = 5

function strangeCounter(t) {
    // track the current min val of a cycle
    let val = 3
    // track the minimum time val of a cycle
    let time = 1

    // time + val - 1 is the last second of a cycle
    // loop until we get a matching cycle
    while (t > time + val - 1) {
        // first second of the next cycle is a result of addition of the first second and value of the current cycle
        time = time + val
        // first value of the next cycle is the first value of the current cycle multiplied by 2
        val = val * 2
    }

    // once we have defined our cycle we can calculate value of the given second by subtraction of diff between
    // given second and the first second of the cycle from the first val of the cycle
    return val - (t - time)
}

console.log(strangeCounter(t))

