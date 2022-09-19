function printEveryNThElementFromAnArray(arr, step){
    let newArr=[];
    // for(let i =0; i<arr.length; i+=step){
    //     newArr.push(arr[i]);
    // }
    // //console.log(newArr);
    // return newArr;
    return arr.filter((x, i)=>{
        if(i % step===0){
            return x;
        }
    });
}
printEveryNThElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
printEveryNThElementFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2
);
printEveryNThElementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6
);