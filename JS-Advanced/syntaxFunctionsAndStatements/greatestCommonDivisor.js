function findGreatestCommonDivisor(num1, num2){
    let higherNum=0;
    let lowerNum=0;
if(num1>num2)
{
higherNum=num1;
lowerNum=num2;
}
else
{
    higherNum=num2;
    lowerNum=num1;
}
let result=1;
for ( let i = 1; i<=higherNum; i++){
if(higherNum%i==0 && lowerNum%i==0)
{
    result=i;
}

}
console.log(result);

}
findGreatestCommonDivisor(15, 5);
findGreatestCommonDivisor(2154, 458);