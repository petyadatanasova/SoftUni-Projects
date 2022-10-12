function extract(content) {
    let text = (document.getElementById(content).textContent).toString().trim();

    let result = [];
    for (let i = 0; i < text.length; i++) {
        let working = "";
        if (text[i] == "(") {
            while (true) {

                if (text[i + 1] != ")") {
                    working += text[i + 1];
                }
                else if (text[i + 1] == ")") {
                    result.push(working);
                    working = "";
                    i++;
                    break;
                }
                i++
            }
        }

    }
    return result.join("; ");
    
    // let text = document.getElementById(content).textContent;
    // let pattern = /\(([^)]+)\)/g;
    // let result = text.matchAll(pattern);
    // let matches=[];
    // for (const singleMatch of result) {
    //     matches.push(singleMatch[1]);
    // }
    // return matches.join("; ");

}