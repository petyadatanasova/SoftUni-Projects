function cookingByNumbers(number, operation1, operation2, operation3, operation4, operation5){
let result = number;
let commands = [operation1, operation2, operation3, operation4, operation5];

for(let i = 0; i<5; i++)
{
    switch(commands[i])
    {
        case "chop":
            result/=2;
            break;
        case "dice":
                result/=Math.sqrt(result);
                break;  
        case "dice":
            result/=4;
            break;  
        case "spice":
            result+=1;
            break;
        case "bake":
            result *=3;
            break;
        case "fillet":
            result*=0.80;
            break;
    }
    console.log(result);
}

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');