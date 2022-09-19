function magicMatrices(matrix){

    let isMagic=true;

    for(let row =0; row<matrix.length-1; row++){
        let sumCurrent=0;
        let sumNext=0;
        for(let col =0; col<matrix.length; col++){
            sumCurrent+=matrix[row][col];
            sumNext+=matrix[row+1][col];
        }
        if(sumCurrent!=sumNext)
        {
            isMagic=false;
            return false;
        }
    }
    for(let col =0; col<matrix.length-1; col++){
        let sumCurrent=0;
        let sumNext=0;
        for(let row =0; row<matrix.length; row++){
            sumCurrent+=matrix[row][col];
            sumNext+=matrix[row][col+1];
        }
        if(sumCurrent!=sumNext)
        {
            isMagic=false;
            return isMagic;
        }
    }
    
    return isMagic;
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