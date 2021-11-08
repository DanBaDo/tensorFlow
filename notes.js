const array = [[[1,[1,1],1,[1,[1,2]]],3,2],[12,1,3],[5,1,[1,2]],2];
/*
Modelo de datos
Objeto Matrix que use un manager para aceder a los datos
Pieza de software acceder a esos datos 3 -> MatrixIndicators
*/
function MatrixIndicators(value, position){
    this.value = value;
    this.position = position;
}
const render = (matrix, internalResponse = []) => {
    //comprobar que ya es numero
    if (!Array.isArray(matrix)) {
        if (!typeof internalResponse === 'undefined') return;
        else return "Error trying to load matrix";
    }
    //seguir descomponiendo la matriz
    matrix.forEach((rhs) => {
        if (typeof rhs === 'number') internalResponse.push(rhs);
        return reloadMatrix(rhs, internalResponse);
    });
    return internalResponse;
}
console.log(render(array));