function sameNumbers(num){
let numberAsString = num+"";
let firstDigit = numberAsString[0];
let flag = true;
let sum=Number(firstDigit);
for(let i=1; i<numberAsString.length; i++)
{
    sum+=Number(numberAsString[i]);
    if(firstDigit!==numberAsString[i])
{
    flag=false;
   
}
}
console.log(flag);
console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234);
