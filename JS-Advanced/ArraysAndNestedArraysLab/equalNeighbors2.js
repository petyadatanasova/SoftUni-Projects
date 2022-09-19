function equalNeighbors(matrix) {
    let neighborsCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {

            let element = matrix[row][col];

            if (col + 1 <= matrix.length - 1 && element == matrix[row][col + 1]) {
                neighborsCount++;
            }

             if (row + 1 <= matrix.length - 1 && element == matrix[row + 1][col]) {
                neighborsCount++;
            }

        }

    }
    console.log(neighborsCount);
    return neighborsCount;
}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);
equalNeighbors([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']
]);