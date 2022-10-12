function createRecord(name, population, treasury){

    const obj = {};
    obj.name=name;
    obj.population=population;
    obj.treasury=treasury;

    return obj
//     let obj = {
//         name,
//         population, 
//         treasury
//     };
// return obj;
}
console.log(createRecord('Tortuga', 7000, 15000));
console.log(createRecord('Santo Domingo',12000,23500));