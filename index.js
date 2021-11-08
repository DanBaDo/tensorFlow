/**
 * Descrive a data founded on a array structure.
 * @param {*} value The data itself.
 * @param {*} position The indexes path from main array to the original data position.
 */
function MatrixIndicators(value, position){
    this.value = value;
    this.position = position;
}

/**
 * Traverse array recursively.
 * Get values and his positions relative to main array.
 * @param {* Array} rhs Array for traverse in current iterarion
 * @param {MatrixInicators Array} internalResponse Array for keeping track of collected data
 * @param {uInt Array} position Multidimensional vecto pointing to current iteration on original array.
 * @returns {MatrixInicators Array} 
 */
const reloadMatrix = (rhs,internalResponse = [], position=[]) => {
    if ( Array.isArray(rhs) ) rhs.forEach(
        (rhs, idx) => reloadMatrix(rhs, internalResponse, [...position, idx])
    )
    else {
        internalResponse.push(new MatrixIndicators(rhs, position));
    }
    return internalResponse; // Kill current iteration keeping internalResponse
}


// Tests
const array = [[1,3,2],[12,1,3],[5,1,[1,2,[0,9,8,33]]],2];
let output = JSON.stringify(reloadMatrix(array))
console.log(output)
