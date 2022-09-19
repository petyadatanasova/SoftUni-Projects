function sortingNumbers(arr){
    let result=[];
    arr.sort((a,b)=>a-b);
    let rotations = arr.length;
    for (let i = 0; i < rotations; i++) {
        if(i % 2==0){
            result.push(arr.shift());
        }
        else{
            result.push(arr.pop());
        }
        
    }
    //console.log(result);
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);