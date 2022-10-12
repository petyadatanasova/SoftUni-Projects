function createHTMLTable(jsonInput){

    let input = JSON.parse(jsonInput);
    let table =["<table>"];
    table.push(tableHeadings(input[0]));
    for (const element of input) {
        table.push(tableBody(element));
    }
    table.push(`</table>`);
    
    function tableHeadings(obj){
        let headings=`\t<tr>`;
        Object.keys(obj).forEach(key=> {headings +=`<th>${escapeHTML(key)}</th>`});
        
        headings+=`</tr>`;
        return headings;
    }
    function tableBody(obj){
        let body=`\t<tr>`;
        Object.values(obj).forEach(value=>{body+=`<td>${escapeHTML(value)}</td>`});
        body+=`</tr>`;
        return body;
    }
    // function escapeHTML(value) {
    //     // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
    //     let entityMap = {
    //         "&": "&amp;",
    //         "<": "&lt;",
    //         ">": "&gt;",
    //         '"': '&quot;',
    //         "'": '&#39;',
    //         "/": '&#x2F;'
    //     };
    //     return value.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    // }
     function escapeHTML(value){
        return value.toString()
        .trim()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        
    
     }
    console.log(table.join("\n"));
}
createHTMLTable(
    `[{"Name":"Stamat",
       "Score":5.5},
      {"Name":"Rumen",
       "Score":6}]`);

createHTMLTable(
`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);