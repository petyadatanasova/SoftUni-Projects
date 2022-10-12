function solve(input) {
   
        let countNum=0;
        let countOperations=0;
        for (let i = 0; i < input.length; i++) {
            if(typeof(input[i])==="number"){
                countNum++;
            }
            else{
                countOperations++;
            }
        }
        if(countNum>countOperations+1){
            return console.log("Error: too many operands!");
        }
        else if(countNum<=countOperations){
            return console.log("Error: not enough operands!");
        }
    
    while (input.length > 1 ) {
        let workArr = [];
       
        for (let i = 0; i < input.length; i++) {
            if (typeof (input[i]) === "number") {
                workArr.push(input[i])
            }
            else {
                let seconNum = workArr.pop();
                let firstNum = workArr.pop();
                let result = 0;
                if (input[i] === "+") {
                    result = firstNum + seconNum;
                } else if (input[i] === "-") {
                    result = firstNum - seconNum;
                } else if (input[i]=== "*") {
                    result = firstNum * seconNum;
                } else if (input[i] === "/") {
                    result = firstNum / seconNum;
                }
                input.splice([i - 2], 0, result);

                input.splice([i - 1], 3);
                
                break;
            }

        }
    }
    console.log(input[0]);
}
solve([
    3,
    4,
    '+'
]);
solve([
    5,
    3,
    4,
    '*',
    '-'
]);
solve([
    7,
    33,
    8,
    '-'
]);
solve([
    15,
    '/'
]);
solve ([
    "-"
])
solve ([
    1
])