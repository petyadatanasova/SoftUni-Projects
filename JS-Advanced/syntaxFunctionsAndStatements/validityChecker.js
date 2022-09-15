function validityChecker(x1, y1, x2, y2){

let firstChecker = Math.sqrt((0-x1)*(0-x1)+(0-y1)*(0-y1));
let secondChecker = Math.sqrt((0-x2)*(0-x2)+(0-y2)*(0-y2));
let thirdChecker = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));

if(Number.isInteger(firstChecker))
{
console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
}
else{
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
}
if(Number.isInteger(secondChecker))
{
console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
}
else{
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
}
if(Number.isInteger(thirdChecker))
{
console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
}
else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);