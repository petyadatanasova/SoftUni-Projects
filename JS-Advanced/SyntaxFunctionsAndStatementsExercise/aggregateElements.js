function aggregateElements(...params){
    let numbers = params[0];

    let sum=0;
for (let i = 0; i<numbers.length; i++)
{

    sum+=numbers[i];
}
console.log(sum);
let sumInverse=0;
for (let i = 0; i<numbers.length; i++)
{

    sumInverse+=(1/numbers[i]);
}
console.log(sumInverse);
let concat="";
for (let i = 0; i<numbers.length; i++)
{

    concat+=numbers[i];
}
console.log(concat);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);