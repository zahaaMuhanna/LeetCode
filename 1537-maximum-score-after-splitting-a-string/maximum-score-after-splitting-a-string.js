/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let left = -1;
    let zeros = 0;
    let ones = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') {
            zeros++;
        } else {
            ones++;
        }

        left = Math.max(left, zeros - ones);
    }

    ones += s[s.length - 1] === "1";

    return left + ones;    
};