class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        let newNum =[];
        let workingNum=this.value;
        while(workingNum>0){
            let rest = workingNum%16;
            if(rest>9){
                switch(rest){
                    case 10: newNum.unshift("A");
                    break;
                    case 11: newNum.unshift("B");
                    break;
                    case 12: newNum.unshift("C");
                    break;
                    case 13: newNum.unshift("D");
                    break;
                    case 14: newNum.unshift("E");
                    break;
                    case 15: newNum.unshift("F");
                    break;
                }
            }else{
                newNum.unshift(rest);
            }
            workingNum=Math.trunc(workingNum/16);

        }
        return `0x`+newNum.join("");
    }
    plus(number) {
        return new Hex(this.value+Number(number));
    }
    minus(number) {
        return new Hex(this.value-Number(number));
    }
    parse(string) {

        let workingNum=0;
        let workingSum = 0;
        let strReverseLenght=string.length-1;
        for(let i=0; i<string.length; i++){
            switch(string[i]){
                case "A": workingNum=10;
                break;
                case "B": workingNum=11;
                break;
                case "C": workingNum=12;
                break;
                case "D": workingNum=13;
                break;
                case "E": workingNum=14;
                break;
                case "F": workingNum=15;
                break;
            }
            workingSum+=Number(workingNum*(16**strReverseLenght));
            strReverseLenght--;
        }
        return workingSum;
    }
}
// let a = new Hex(10);
// let b = new Hex(5);
// let c = new Hex(155);
// console.log(a.plus(c).toString());

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
