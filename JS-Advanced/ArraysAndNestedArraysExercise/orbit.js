function orbit(input) {
    let width = input[0];
    let height = input[1];
    let x = input[2];
    let y = input[3];

    let matrix = [];
   
    for (let i = 0; i < height; i++) {
        matrix[i] = [];
    }
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;

        }

    }


//console.table(matrix);
    matrix.forEach(row => {
        console.log(row.join(" "));
    })
}
orbit([4, 4, 0, 0]);
console.log("-----------------")
orbit([5, 5, 2, 2]);
console.log("-----------------")
orbit([3, 3, 2, 2]);