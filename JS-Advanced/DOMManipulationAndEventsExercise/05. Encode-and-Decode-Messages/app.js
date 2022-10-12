function encodeAndDecodeMessages() {
    let buttonEncode = document.getElementsByTagName('button')[0];
    let buttonDecode = document.getElementsByTagName('button')[1];

    let encodedArea = document.getElementsByTagName('textarea')[1];
    let decodedArea = document.getElementsByTagName('textarea')[0];

    buttonEncode.addEventListener('click', encodeMessage);
    buttonDecode.addEventListener('click', decodeMessage);

    function encodeMessage(e){
        let inputMessage = document.getElementsByTagName('textarea')[0].value;
        let result =[];
        for (let i = 0; i < inputMessage.length; i++) {
            let currentChar = inputMessage.charCodeAt(i);
            currentChar+=1;
            result.push(String.fromCharCode(currentChar));
        }
        encodedArea.textContent=result.join("");
        decodedArea.value="";
    }
    function decodeMessage(e){
        let inputMessage = document.getElementsByTagName("textarea")[1].value;
        let result =[];
        for (let i = 0; i < inputMessage.length; i++) {
           let currentChar = inputMessage.charCodeAt(i);
           currentChar-=1;
           result.push(String.fromCharCode(currentChar)); 
        }
        encodedArea.textContent=result.join("");
    }
}