class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        spaceRequired=Number(spaceRequired);
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }
    ripenPlant(plantName, quantity) {
        let isPresent = false;
        let index = -1;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].plantName === plantName) {
                isPresent = true;
                index = i;
            }
        }
        if (isPresent === false) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[index].ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        this.plants[index].ripe = true;
        this.plants[index].quantity=quantity;
        return quantity === 1 ? `${quantity} ${plantName} has successfully ripened.` : `${quantity} ${plantName}s have successfully ripened.`;
    }
    harvestPlant(plantName) {
        let isPresent = false;
        let index = -1;
        for (let i = 0; i < this.plants.length; i++) {
            if (this.plants[i].plantName === plantName) {
                isPresent = true;
                index = i;
            }
        }
        if (isPresent === false) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (this.plants[index].ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.spaceAvailable += this.plants[index].spaceRequired;
        this.storage.push({ plantName, quantity: this.plants[index].quantity});
        this.plants.splice(index, 1);
        return `The ${plantName} has been successfully harvested.`

    }
    generateReport() {
        let result = [];
        debugger
        result.push(`The garden has ${this.spaceAvailable} free space left.`);
        let sortedPlantsGarden = this.plants.sort((a,b)=>(a.plantName).localeCompare(b.plantName));
        let plantsInGarden = [];
        for (const plant of sortedPlantsGarden) {
            plantsInGarden.push(plant.plantName);
        }
        result.push(`Plants in the garden: ${plantsInGarden.join(", ")}`);
        if(this.storage.length===0){
            result.push("Plants in storage: The storage is empty.");
        }else{
            let plantsInStorage =[];
            for (const pl of this.storage) {
                plantsInStorage.push(`${pl.plantName} (${pl.quantity})`);
            }
            result.push(`Plants in storage: ${plantsInStorage.join(", ")}`);
        }
        return result.join("\n");
    }

}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());







