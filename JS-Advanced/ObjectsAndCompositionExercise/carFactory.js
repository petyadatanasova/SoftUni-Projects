function carFactory(input) {
    let result = {};
    result.model = input.model;
    let engineEnum ={
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    }

    if(input.power<=90){
        result.engine = engineEnum["Small engine"];
    }else if(input.power<=120){
        result.engine = engineEnum["Normal engine"];
    } else {
        result.engine = engineEnum["Monster engine"];
    };

    result.carriage = {
        type: input.carriage,
        color: input.color

    };
    let size=input.wheelsize%2==0 ? Number(input.wheelsize)-1 : input.wheelsize;
    result.wheels=new Array(4);
    result.wheels.fill(size);
   
    return result;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log("-------------");
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));