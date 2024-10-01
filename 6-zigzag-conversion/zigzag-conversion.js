/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || numRows >= s.length){
        return s;
    } // check the number of rows

    let indx=0; // current index
    let direction=1; // the direction even 1 or -1 

    const rows=Array.from({length:numRows}, ()=>'' ); // array of string

    for(const char of s){
        rows[indx] += char;// push to rows array
        if(indx === 0){
            direction = 1; // check if the index in the top and the direction will be 1 (downwards)
        }
        else if(indx === numRows -1 ){
            direction = -1;  // check if the index in the bottom and the direction will be -1 (upwards)
        }
        indx += direction; // Update the row index based on direction
    }

    return rows.join(''); // join the string array 
    
};