function solve(input) {

    let text = commandFunc();
    let result = [];

    for (const item of input) {
        let [command, value] = item.split(" ");
        if(command=="add"){
            text.add(value);
        }else if (command=="remove"){
            text.remove(value);
        }else if(command=="print"){
            text.print();
        }
    }
    function commandFunc() {
        
        return {
            add,
            remove,
            print
        }
    }
    function add(value) {
        result.push(value);
    }
    function remove(value) {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                result.splice(i, 1);
            }
        }
        return result;
    }
    function print() {
        console.log(result.join(","))
    }

}


// function solve(input){
//     let result =[];
//     for (const item of input) {
//         let[command, value] = item.split(" ");
    
//         switch (command){
//             case "add":
           
//                 result.push(value);
            
//             break;
//             case "remove":
//                 function remove(value){
//                     for (let i =0; i<result.length; i++) {
//                         if(result[i]===value){
//                             result.splice(i,1);
//                         }
//                     }
//                     return result;
//                 }
//             result = remove(value);
                
//             break;
//             case "print":
                
//                     console.log(result.join(","));
                
//             break;
//         }
        
//     }
// }
solve([
    'add hello',
    'add again',
    'remove hello',
    'add again',
    'print'
]);
solve([
    'add pesho',
    'add george',
    'add peter',
    'remove peter',
    'print'
]);