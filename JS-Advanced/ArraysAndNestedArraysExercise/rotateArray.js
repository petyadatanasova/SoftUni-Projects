function rotateArray(arr, rotations){
 let rotatingElement="";
    for(let i =0; i<rotations; i++){
        rotatingElement=arr.pop();
        arr.unshift(rotatingElement);
    }
    console.log(arr.join(" "));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);