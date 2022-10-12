function generateReport() {
    let result = [];
   let textArea = document.getElementById("output");
   let allColumns = document.querySelectorAll("tr input[type=checkbox]");
   let allData = document.querySelectorAll("tbody tr");
   for (const data of allData) {
    let employee = {};
    for (let i = 0; i < allColumns.length; i++) {
        
       if(allColumns[i].checked){
        let columnName = allColumns[i].name;
        
        employee[columnName] = data.children[i].textContent;
       } 
    }
    result.push(employee);
   }
   let resultJson = JSON.stringify(result);
   textArea.textContent=resultJson;
}