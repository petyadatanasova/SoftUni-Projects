function magicMatrices(matrix){

    for (let row = 0; row < matrix.length-1; row++) {
        let sumCurrentRow = matrix[row].reduce((curr, next)=>curr+next);
        let sumNextRow = matrix[row+1].reduce((curr, next)=>curr+next);
        let sumCurrentCol=0;
        let sumNextCol=0;
       
        for (let col = 0; col < matrix.length; col++) {
            sumCurrentCol+=matrix[row][col];
            sumNextCol+=matrix[row+1][col];
        }
      if(sumCurrentRow!=sumNextRow || sumCurrentCol!=sumNextCol){
        return false;
      }
        
    }
    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));