/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1 || numRows >= s.length){
        return s;
    } 

    let indx=0;
    let direction=1;

    const rows=Array.from({length:numRows}, ()=>'' );

    for(const char of s){
        rows[indx] += char;

        if(indx === 0){
            direction = 1;
        }
        else if(indx === numRows -1 ){
            direction = -1;
        }
        indx += direction;
    }

    return rows.join('');
    
};