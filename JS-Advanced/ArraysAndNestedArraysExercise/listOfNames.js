function listOfNames(list){

    // let newList= list.sort((a,b) => a.localeCompare(b));
    // for(let i=0; i<newList.length; i++){
    //     console.log(`${i+1}.${newList[i]}`);
    // }

    list.sort((a,b)=>a.localeCompare(b))
        .forEach((value, index)=> console.log(`${index+1}.${value}`))
}
listOfNames(["John", "Bob", "Christina", "Ema"]);