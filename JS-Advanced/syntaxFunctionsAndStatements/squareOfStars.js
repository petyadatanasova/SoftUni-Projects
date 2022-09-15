function squareOfStars(num){
let result="";
for(let i=0; i<num; i++){

for (let j=0; j<num; j++){
    result+='* '
}
console.log(result);
result="";
}

}
squareOfStars(1);
console.log("---------------------")
squareOfStars(2);
console.log("---------------------")
squareOfStars(5);
console.log("---------------------")
squareOfStars(7);
console.log("---------------------")
squareOfStars();