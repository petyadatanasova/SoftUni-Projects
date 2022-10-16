class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = Number(length)<0 ? 0 : Number(length);
      }
 

    increase(length) {
        this.innerLength += Number(length);
    }
    decrease(length) {
        this.innerLength -= Number(length);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        if(this.innerLength>=this.innerString.length-1){
            return this.innerString;
        }else if (this.innerLength<this.innerString.length && this.innerLength!==0){
           return this.innerString.slice(0, this.innerLength)+"...";

        }else if(this.innerLength===0){
            return "...";
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
