function extractText() {
    let text = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector("#result");

    for (let node of text) {
       textArea.value+=node.textContent+"\n";
    }
   
}


