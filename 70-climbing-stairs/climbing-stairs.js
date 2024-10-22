/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a =1; //number of ways to get to the current step
    let b =1; //number of ways to get to the next step
    for(let i=0 ; i<n ; i++){
        let temp = a;
        a=b;
        b+=temp;
    }
    return a;
};