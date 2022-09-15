function LargestNumber(num1, num2, num3){
    let largetstNumber;
if(num1>num2 && num1>num3)
{
largetstNumber=num1;
}
else if(num2>num1 && num2>num3)
{
    largetstNumber=num2;
}
else
{

    largetstNumber=num3;
}
console.log(`The largest number is ${largetstNumber}.`);
}

LargestNumber(-3, -5, -22.5)