function diagonalAttack(input){

    //to parse Matrix
    let matrix = [];

    input.forEach(row => {
        matrix.push(row.split(" ").map(item=>parseInt(item)));
    });
    //calculate diagonals sum

    let firstDiagonalSum = 0
    let secondDiagonalSum = 0;
    let leftIndex=0;
    let rightIndex = matrix.length-1;
     matrix.forEach(row=>{
        firstDiagonalSum+=row[leftIndex++];
        secondDiagonalSum+=row[rightIndex--];
    })
    
    //transform matrix
    if(firstDiagonalSum==secondDiagonalSum){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if(row!=col && row+col!=matrix.length-1){
                    matrix[row][col]=firstDiagonalSum;
                }
            }
        }
    }
    //output
    matrix.forEach(row=>{
        console.log(row.join(" "));
    });
}
diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);