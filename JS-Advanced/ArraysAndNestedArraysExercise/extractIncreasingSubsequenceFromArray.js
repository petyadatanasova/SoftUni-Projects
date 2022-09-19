function extractIncreasingSubsequenceFromArray(arr){
    let newArr=[];
    let previousNum= arr[0];

    newArr.push(previousNum);
    for(let i = 1; i<=arr.length; i++){
        if(previousNum<=arr[i])
        {
            previousNum=arr[i];
            newArr.push(previousNum);
        }
    }
    return newArr;
    // arr.reduce((acc, currentElement)=>{
    //     if(previousNum<=currentElement){
    //         newArr.push(currentElement);
    //         previousNum=currentElement;
    //     }
    // },[]);
    // console.log(newArr);
    // return newArr;
}
extractIncreasingSubsequenceFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );
extractIncreasingSubsequenceFromArray([1, 
    2, 
    3,
    4]
    );
extractIncreasingSubsequenceFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );
