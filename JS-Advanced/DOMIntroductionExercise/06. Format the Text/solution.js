function solve() {
  let input = document.getElementById("input").value.split(".").filter(x => x.length > 0);
  let output = document.getElementById("output");
 
  for (let i = 0; i < input.length; i+=3) {
    let paragraphs = [];
    for (let j = 0; j < 3; j++) {
      if (input[i+j]) {
        paragraphs.push(input[i+j]);
        
      }
    }
    let paragraph = paragraphs.join(". ") + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
  
}

// function solve() {
//   let text = document.getElementById("input").value.split(".").filter(x=>x!='');
//   let output = '';
 

//   let paragraphs = '';
//   for (let i = 1; i <= text.length; i++) {
//     paragraphs+=(text[i-1]+'.');
//     if (i%3==0) {
      
//       output += `<p> ${paragraphs} </p>`;
//       paragraphs = "";

//     }
   

//   }
//   if (paragraphs) {
//     output+=(`<p> ${paragraphs} </p>`);

//   }

//   document.getElementById("output").innerHTML += output;
// }
// function solve() {
//   let text = document.getElementById("input").value.split(".").filter(x=>x!='');
//   let output = '';
//   let paragraphs = '';

//   let counter=0;
//   for (let i = 0; i < text.length; i++) {
    
//     if (counter==3) {
      
//       output += `<p> ${paragraphs} </p>`;
//       paragraphs = "";
//       counter=0;

//     }
//     paragraphs+=(text[i]+'.');
//     counter++;

//   }
//   if (paragraphs) {
//     output+=(`<p> ${paragraphs} </p>`);

//   }

//   document.getElementById("output").innerHTML += output;
// }