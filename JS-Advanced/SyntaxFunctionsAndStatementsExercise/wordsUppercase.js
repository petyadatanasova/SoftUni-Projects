
function wordsUppercase(input){

    let expression = input.toLowerCase();
    let result="";
    let words=[];

for(let i =0; i<expression.length; i++){

    if(expression.charCodeAt(i)>=97 && expression.charCodeAt(i)<=122)
    {
        result+=expression[i];
    }
    else{
        
        if(result.length>0)
        {
            words.push(result);
        }
       
        result="";
    }
}
if(result.length>0)
{
    words.push(result);
}

let forPrinting = words.join(", ")

console.log(forPrinting.toUpperCase());
}
wordsUppercase('Hi, how are you????');
wordsUppercase('hello,  hi   h  .,lk987');