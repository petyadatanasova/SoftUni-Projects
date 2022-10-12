function solve(input) {
    let cars = {};
    for (const item of input) {
        let [command, name, ...rest] = item.split(" ");
        let [command2, value] = rest ? rest : [];


        if (command === 'create') {
            
            if (command2 === "inherit") {
                cars[name]= Object.create(cars[value]);
            }else{
                cars[name] = {}
            }

        } else if (command === "set") {
            cars[name][command2] = value;
        } else if (command === 'print') {
            let car = [];
            for (const item in cars[name]) {
                car.push(`${item}:${cars[name][item]}`)
            }
            console.log(car.join(","))
        }
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);