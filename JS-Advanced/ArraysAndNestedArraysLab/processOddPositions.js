function processOddPositions(input){
let result = input.filter((x,i)=>i%2==1)
                .map(x=>x*2)
                .reverse();
return result.join(" ");
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);