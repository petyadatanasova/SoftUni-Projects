function circleArea(input){

let result;
let typeOfInput = typeof(input);

if(typeOfInput=="number")
{
let calculation = Math.pow(input,2)*Math.PI;
result = calculation.toFixed(2);
}
else{
result = `We can not calculate the circle area, because we receive a ${typeOfInput}.`;
}

console.log(result);
}
circleArea(5);
circleArea('name');