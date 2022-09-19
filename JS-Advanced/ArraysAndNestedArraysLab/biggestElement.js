function biggestElement(input){
let result=Number.MIN_SAFE_INTEGER;
for(let i =0; i<input.length; i++){

    for(let j = 0; j<input[i].length; j++){
    if(input[i][j]>result)
    {
        result=input[i][j];
    }

    }
}
//console.log( result);
return result;
}
biggestElement([[20, 50, 10], 
                [8, 33, 145]]);

biggestElement([[3, 5, 7, 12],
                [-1, 4, 33, 2],
                [8, 3, 0, 4]]);
biggestElement([[-5, -1, -3], 
                 [-8, -33, -145]]);