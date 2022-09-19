function negativePositiveNumbers(input){

    let result = [];

    for(let i =0; i<input.length; i++){
        if(input[i]<0){
            result.unshift(input[i]);
        }
        else{
            result.push(input[i]);
        }
        
    }

    let stringResult = result.join("\n");
    console.log(stringResult);

}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);