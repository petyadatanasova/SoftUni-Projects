function sumFirstLast(input){

    let arr = input;
    return Number(input[0])+Number(input[input.length-1]);
    //console.log(Number(input[0])+Number(input[input.length-1]));
}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);