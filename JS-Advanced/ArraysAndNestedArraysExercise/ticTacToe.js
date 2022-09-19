function ticTacToe(coordinates) {
    //create dashboard
    let dashBoard = [];
    let markedCells = 0;
    dashBoard[0] = [false, false, false];
    dashBoard[1] = [false, false, false];
    dashBoard[2] = [false, false, false];
    let isPlayer = true;
    let mark = isPlayer = true ? "X" : "O";
    for (let i = 0; i < coordinates.length; i++) {
        
        
        let splitedCoordinates = coordinates[i].split(" ");
        let row = splitedCoordinates[0];
        let col = splitedCoordinates[1];
        //try to mark on not empty cell
        if (dashBoard[row][col] == "X" || dashBoard[row][col] == "O") {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        //mark on dashboard
        dashBoard[row][col] = isPlayer;
        markedCells++;
        let isWin = checkIfWin(dashBoard);
        if (isWin == true) {
            console.log(`Player ${isPlayer} wins!`)
            print(dashBoard);
            return;
        }
        if (markedCells == 9) {
            console.log("The game ended! Nobody wins :(")
            print(dashBoard);
            return;
        }

        function checkIfWin(dashBoard) {
            for (let row = 0; row < dashBoard.length; row++) {
                if ((dashBoard[row][0] == "X" && dashBoard[row][1] == "X" && dashBoard[row][2] == "X") ||
                    (dashBoard[row][0] == "O" && dashBoard[row][1] == "O" && dashBoard[row][2] == "O")) {
                    return true;
                }
            }
            for (let col = 0; col < dashBoard.length; col++) {
                if ((dashBoard[0][col] == "X" && dashBoard[1][col] == "X" && dashBoard[2][col] == "X") ||
                    (dashBoard[0][col] == "O" && dashBoard[1][col] == "O" && dashBoard[2][col] == "O")) {
                    return true;
                }
            }
            if ((dashBoard[0][0] == "X" && dashBoard[1][1] == "X" && dashBoard[2][2] == "X") ||
                (dashBoard[0][0] == "O" && dashBoard[1][1] == "O" && dashBoard[2][2] == "O") ||
                (dashBoard[0][2] == "X" && dashBoard[1][1] == "X" && dashBoard[2][0] == "X") ||
                (dashBoard[0][2] == "O" && dashBoard[1][1] == "O" && dashBoard[2][0] == "O")) {
                return true;
            }

            return false;
        }

        //change player
        if (isPlayer=="X") {
            isPlayer = "O";
        }
        else {
            isPlayer = "X";

        }
        function print(dashBoard) {
            dashBoard.forEach(element => {
                console.log(element.join("\t"));

            });
        }



    }

    console.table(dashBoard);

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