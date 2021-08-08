/*
HackerRank problem
My web-site http://upmate.io
YouTube channel (SUBSCRIBE) - https://www.youtube.com/channel/UCYUUfSJ_8qEP9Nmo2SEXMUQ

Given a string, remove characters until the string is made up of any two alternating characters.
When you choose a character to remove, all instances of that character must be removed.
Determine the longest string possible that contains just two alternating letters.

Example:
s = 'abaacdabd'
result = 4 (resulting string: 'bdbd')
 */

const s = "abaacdabd"

function alternate(s) {
    // max length of the resulting string
    let maxLen = 0;
    // all the combinations of the distinct characters of the given string
    const combinations = [];

    // generate all the permutations of the unique characters
    [...new Set(s)].forEach((v,i,a) => {
        a.slice(i+1).forEach(v1 => {
            combinations.push([v, v1]);
        })
    });

    // loop through all the calculated combinations
    combinations.forEach(comb => {
        // convert string to an array, filter it by letters from the current combination and finally convert back to a
        // string
        const str = [...s].filter(char => comb.includes(char)).join('');
        // check if the string does not contain any consecutive pairs of characters with help of regex
        if (str.match(/(.)\1/) === null) {
            // update max length variable
            maxLen = Math.max(maxLen, str.length);
        }
    })

    return maxLen;
}

console.log(alternate(s));

