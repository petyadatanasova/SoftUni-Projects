function heroicInventory(input){
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let hero ={};
        let [name, level, items] = input[i].split(" / ");
        //let splitHeroDetails = input[i].split(" / ");
        hero.name = name.trim();
        hero.level = Number(level);
        hero.items=items?items.split(", "):[];
       
        heroes.push(hero);
    }
    return JSON.stringify(heroes);

}
console.log(heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));
console.log(heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]));