function addAndRemoveElements(commands){
let newArr = [];
let currentNum=1;

// commands.forEach(command => {
//     command=="add" ? newArr.push(currentNum) : newArr.pop();
//     currentNum++;
// });
// console.log(newArr.length==0 ? "Empty" : newArr.join("\n"));
for(let command of commands){
    if(command=="add"){
        newArr.push(currentNum);
    }
    else if(command==="remove" && newArr.length>0){
        newArr.pop();
    }
    currentNum++;
}
if(newArr.length==0)
{
    console.log("Empty")
}
else
{
    console.log(newArr.join("\n"));
}
}
addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);
addAndRemoveElements(['remove', 
'remove', 
'remove']
);