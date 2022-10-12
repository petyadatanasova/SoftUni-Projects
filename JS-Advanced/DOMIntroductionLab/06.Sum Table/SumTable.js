function sumTable() {
let table = document.querySelectorAll('table tr');
let sum = 0;
    for (let i = 1; i < table.length; i++) {
        
    let col = table[i].children;
    let cost = Number(col[col.length-1].textContent);

    sum+=cost;
        
    }
    document.getElementById("sum").textContent=sum;
}