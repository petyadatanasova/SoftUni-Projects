function sortAnArrayBy2Criteria(arr){

arr.sort((a,b)=>{
    return a.length-b.length || a.localeCompare(b)

});

console.log(arr.join("\n"));

}
sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma']
);
console.log("---------------------");
sortAnArrayBy2Criteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

);
console.log("---------------------");
sortAnArrayBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
);