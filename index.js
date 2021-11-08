function MatrixIndicators(value, position){
    this.value = value;
    this.position = position;
}

const reloadMatrix = (rhs, internalResponse = []) => {
    if ( Array.isArray(rhs) ) rhs.forEach( rhs => reloadMatrix(rhs, internalResponse) )
    else {
        internalResponse.push(rhs);
    }
    return internalResponse; // Kill current iteration keeping internalResponse
}

// Tests
const array = [[1,3,2],[12,1,3],[5,1,[1,2]],2];
console.log(reloadMatrix(array));