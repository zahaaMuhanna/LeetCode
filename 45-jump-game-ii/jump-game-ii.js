/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length;
    let jumps = 0;                  
    let farthest = 0;              
    let endOfCurrentJump = 0;      

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === endOfCurrentJump) {
            jumps++;                    
            endOfCurrentJump = farthest; 
            if (endOfCurrentJump >= n - 1){
              break;  
            } 
        }
    }

    return jumps;
};
