function mathOperations(number1, number2, string){

    switch (string){
case'+':
console.log(number1+number2);
break;
case '-':
    console.log(number1-number2);
break;
case '*':
    console.log(number1*number2);
break;
case '/':
console.log(number1/number2);
break;
case '%':
console.log(number1%number2);
break;
case '**':
console.log(number1**number2);
break;
    }
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');