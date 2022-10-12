function solve() {
  let text = document.getElementById('text').value.toString();
  let convention = document.getElementById('naming-convention').value;
  let result = '';
  //debugger
  let splitText = text.split(' ');
  if (convention == "Pascal Case") {

    for (const word of splitText) {

      result += (word[0]).toUpperCase() + (word.slice(1)).toLowerCase();
    }
  } else if (convention == "Camel Case") {
    let firstWord = splitText[0];
    result += firstWord.toLowerCase();
    for (let i = 1; i < splitText.length; i++) {
      let firstLetter = (splitText[i])[0].toUpperCase();
      let rest = (splitText[i]).slice(1).toLowerCase();
      result += firstLetter+rest;

    }
  } else {
    result = 'Error!'
  }
  document.getElementById("result").textContent=result;
}