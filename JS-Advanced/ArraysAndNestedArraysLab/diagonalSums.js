function diagonalSum(input){
let sumFirstDiagonal=0;
let colIndexFirst=0;
let colIndexSecond=input.length-1;
let sumSecondDiagonal =0;
    for(let row =0; row<input.length; row++){

        sumFirstDiagonal+=input[row][colIndexFirst];
        sumSecondDiagonal+=input[row][colIndexSecond];
        colIndexFirst++;
        colIndexSecond--;

    }
    console.log(sumFirstDiagonal+ " "+sumSecondDiagonal);
    
}
diagonalSum([[20, 40],
             [10, 60]]);
diagonalSum([[3, 5, 17],
             [-1, 7, 14],
             [1, -8, 89]]);