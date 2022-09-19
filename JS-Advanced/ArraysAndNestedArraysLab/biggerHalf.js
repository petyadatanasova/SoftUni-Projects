function biggerHalf(input){

    input.sort((a,b)=>a-b);
    let result = input.splice(Math.floor(input.length/2));
    return result;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);