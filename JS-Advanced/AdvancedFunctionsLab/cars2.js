function solve(input) {

    let cars = {};

    input.forEach(cmd => {
        let splitCommand = cmd.split(" ");
        let command = splitCommand[0];
        let name = splitCommand[1];



        let functions = {
            create,
            createInherit,
            set,
            print
        }

        if (command === "create") {
            if (splitCommand[2]) {
                let nameToInheritFrom = splitCommand[3];
                functions.createInherit(name, nameToInheritFrom);
            } else {
                functions.create(name);
            }
        } else if (command === 'set') {
            functions.set(name, splitCommand[2], splitCommand[3]);
        } else if (command === 'print') {
            functions.print(name, cars);
        }
        function create(name) {
            cars[name] = {};
        }
        function createInherit(name, parentName) {
            create(name);
            cars[name] = Object.setPrototypeOf(cars[name], cars[parentName]);
        }

        function set(name, key, value) {
            cars[name][key] = value;
        }
        function print(name, cars) {
            let toPrint = [];
            let carToPrint = cars[name];
            for (const car in carToPrint) {

                toPrint.push(`${car}:${carToPrint[car]}`);

            }
            console.log(toPrint.join(","));
        }
    })
}



solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);