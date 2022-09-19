function diagonalAttack(input) {

    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        let innerMatrix = (input[i].split(" "));
        matrix[i] = innerMatrix;
    }
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        let i = row;
        firstDiagonalSum += Number(matrix[row][row]);
        secondDiagonalSum += Number(matrix[row][matrix.length - 1 - i])
    }
    if (firstDiagonalSum == secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                matrix[row][col]=parseInt(matrix[row][col]);
                if (!((row===col) || (col===matrix.length-1-row))) {
                    matrix[row][col] = firstDiagonalSum;
                }

            }
        }
    }
   for (let i = 0; i < matrix.length; i++) {
    let text = "";
    text +=matrix[i].join(" ");
    console.log(text);  
   }
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