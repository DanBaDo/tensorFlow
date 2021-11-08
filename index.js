function MatrixIndicators(value, position){
    this.value = value;
    this.position = position;
}

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
