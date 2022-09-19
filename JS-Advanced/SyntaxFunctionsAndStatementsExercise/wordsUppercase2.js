function wordsUppercase(input){

return input.match(/\w+/g).join(", ").toUpperCase();
}
console.log(wordsUppercase('Hi, how are you????'));
console.log(wordsUppercase('hello'));