/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap= {};

    // Step 1: Build the frequency map
    for(let num of nums){
        if(freqMap[num]){
            freqMap[num]+=1;
        }else{
            freqMap[num] = 1;
        }
    }

    // Step 2: Convert the map to an array of [num, frequency] pairs and sort by frequency
    const sortedArray = Object.entries(freqMap).sort((a,b)=>b[1] - a[1]);

    // Step 3: Extract the top k elements
    const result = [];
    for(let i=0 ; i<k ;i++){
        result.push(parseInt(sortedArray[i][0]));
    }

    return result;
};