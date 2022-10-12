function lowestPricesInCities(arr) {
    let products = {};
    for (let i = 0; i < arr.length; i++) {
        let [town, product, price] = arr[i].split(" | ");
        price = Number(price);
        if (products[product]) {

            if (products[product].price <= price) {

                continue;
            }

        }
        products[product] = {
            price,
            town
        }
    }
    let testArr = Object.keys(products);
    for (let i = 0; i < testArr.length; i++) {
        let value = Object.values(products[testArr[i]]);

        console.log(`${testArr[i]} -> ${value[0]} (${value[1]})`);
    }
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
