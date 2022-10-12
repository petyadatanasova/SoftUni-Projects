function solve() {

    let menuTo = document.querySelector("div select#selectMenuTo");
    let optionBinary = document.createElement('option');
    optionBinary.value = 'binary';
    optionBinary.textContent = 'Binary';
    menuTo.appendChild(optionBinary);

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.textContent = 'Hexadecimal';
    menuTo.appendChild(optionHexadecimal);

    document.querySelector('button').addEventListener('click', convert);
    let resultArea = document.getElementById('result');
    function convert() {
        let number = document.getElementById('input').value;
        number = Number(number);

        let selected = document.getElementById('selectMenuTo').value;
        let result = [];
        if (selected === 'binary') {
            while (number !== 0) {
                let element = number % 2;
                result.unshift(element);
                number = Math.trunc(number / 2);
            }
        } else if (selected === 'hexadecimal') {
            while (number !== 0) {
                let element = number % 16;
                result.unshift(element);
                number = Math.trunc(number / 16);
            }
            for (let i =0; i<result.length; i++) {
                switch(result[i]){
                case 10: result[i]='A';
                break;
                case 11: result[i]='B';
                break;
                case 12: result[i]='C';
                break;
                case 13: result[i]='D';
                break;
                case 14: result[i]='E';
                break;
                case 15: result[i]='F';
                break;
                }
            }
        }
        resultArea.value=result.join("");
    }
}