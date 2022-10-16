function autoCompany(inputs) {
    let autos = {};
    for (const input of inputs) {
        let [carBrand, carModel, producedCars] = input.split(" | ");
        producedCars = Number(producedCars);
        if (!Object.keys(autos).includes(carBrand)) {
            autos[carBrand] = {};
        }
        if (!Object.keys(autos[carBrand]).includes(carModel)) {
            autos[carBrand][carModel] = 0;
        }
        autos[carBrand][carModel] += producedCars;
    }

    for (const brand in autos) {
        console.log(`${brand}`)
        for (const model in autos[brand]) {

            console.log(`###${model} -> ${autos[brand][model]}`)

        }

    }

}
autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])