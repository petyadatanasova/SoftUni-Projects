function storeCatalogue(input) {
    let catalogue = {};
    for (let i = 0; i < input.length; i++) {
        let [product, price] = input[i].split(" : ");
        price = Number(price);
        let letter = product[0];

        if (!catalogue[letter]) {
            catalogue[letter] = [{
                product: product,
                price: price
            }]
        } else {
            catalogue[letter].push({
                product: product,
                price: price
            })
        }
    }
        for (const letter of Object.entries(catalogue).sort((a,b)=>a[0].localeCompare(b[0]))) {
            console.log(letter[0]);
            letter[1].sort((a,b)=>a.product.localeCompare(b.product)).forEach(element => {
                console.log(`  ${element.product}: ${element.price}`);
            });
        }
}
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
storeCatalogue([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);