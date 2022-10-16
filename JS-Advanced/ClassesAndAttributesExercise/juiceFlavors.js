function juiceFlavors(input) {
    let bottles = new Map();
    let currentJuices = new Map();
    for (const info of input) {
        let [name, quantity] = info.split(" => ");
        quantity = Number(quantity);
        let currentQuantiy= !currentJuices.get(name) ? 0 : currentJuices.get(name);
        currentJuices.set(name, currentQuantiy+quantity);


        if (currentJuices.get(name) >= 1000) {
            let bottlesProduced = Math.trunc(currentJuices.get(name) / 1000);
            
            currentJuices.set(name, currentJuices.get(name) % 1000);
            let currentbottles= !bottles.get(name) ? 0 :bottles.get(name) ;
            bottles.set(name, currentbottles+bottlesProduced);
        }
    }
    let output = [];
    for (const info of Array.from(bottles.entries())) {
        output.push(`${info[0]} => ${info[1]}`);
    }
    console.log(output.join("\n"));
}
juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
console.log("---------------------")
juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
])