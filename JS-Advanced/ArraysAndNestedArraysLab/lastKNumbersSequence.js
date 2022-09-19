function lastKNumbersSequence(num1, num2){
let newArray = [];
newArray[0]=1;

for(let i=1; i<num1; i++){

    let workingNum=0;
    let startNum = i-num2<0 ? 0 : i-num2;
    for(let j =startNum; j<i; j++){
    workingNum+=newArray[j];
    }
    newArray.push(workingNum);
    workingNum=0;
}

return newArray;
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
lastKNumbersSequence(5, 2);
lastKNumbersSequence(1,1);
lastKNumbersSequence(1,8);
lastKNumbersSequence(0,1);