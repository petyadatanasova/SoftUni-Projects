function ticTacToe(coordinates) {

    let dashBoard = [];
    let markedCells = 0;
    dashBoard[0] = [false, false, false];
    dashBoard[1] = [false, false, false];
    dashBoard[2] = [false, false, false];
    let isPlayer = "X";
    for (let i = 0; i < coordinates.length; i++) {

        let splitedCoordinates = coordinates[i].split(" ");
        let row = splitedCoordinates[0];
        let col = splitedCoordinates[1];

        if (dashBoard[row][col] == "X" || dashBoard[row][col] == "O") {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        dashBoard[row][col] = isPlayer;
        markedCells++;
        let isWin = checkIfWin(dashBoard, row, col);
        if (isWin == true) {
            console.log(`Player ${isPlayer} wins!`)
            print(dashBoard);
            return;
        }
        else if (markedCells == 9) {
            console.log("The game ended! Nobody wins :(")
            print(dashBoard);
            return;
        }
        else {
            if (isPlayer == "X") {
                isPlayer = "O";
            }
            else {
                isPlayer = "X";
            }
        }

        function checkIfWin(dashBoard, row, col) {
            if ((dashBoard[0][0] == dashBoard[1][1] && dashBoard[2][2] == dashBoard[0][0] && dashBoard[0][0] !== false) ||
                (dashBoard[0][2] == dashBoard[1][1] && dashBoard[2][0] == dashBoard[0][2] && dashBoard[0][2] !== false) ||
                (dashBoard[row][0] == dashBoard[row][1] && dashBoard[row][0] == dashBoard[row][2] && dashBoard[row][0] !== false) ||
                (dashBoard[0][col] == dashBoard[1][col] && dashBoard[0][col] == dashBoard[2][col] && dashBoard[0][col] !== false)) {
                return true;
            }
        }
        function print(dashBoard) {
            dashBoard.forEach(element => {
                console.log(element.join("\t"));
            });
        }
    }
}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
console.log("-------------------");
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);
console.log("-------------------");
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);