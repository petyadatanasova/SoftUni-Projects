// function solve(area, vol, input) {

//     let objects = JSON.parse(input);
//     function calc (obj){
//         let areaObj = Math.abs(area.call(obj));
//         let volObj = Math.abs(vol.call(obj));

//         return {area: areaObj, vol: volObj}

//     }

//     return objects.map(calc);
// }
function solve(area, vol, input) {

    let objects = JSON.parse(input);
    let result = [];
    for (const object of objects) {
        result.push({
            area: area.apply(object),
            volume: vol.apply(object)

        });

    }
    return result;
}
function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));
