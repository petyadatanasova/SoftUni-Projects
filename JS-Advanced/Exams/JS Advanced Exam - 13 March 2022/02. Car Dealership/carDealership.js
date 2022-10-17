class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (!model || horsepower < 0 || !Number.isInteger(horsepower) || price < 0 || typeof (price) !== "number" ||
            mileage < 0 || typeof (mileage) !== "number") {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
    sellCar(model, desiredMileage) {
        let isCarAvailable = false;
        let index = -1;
        let soldPrice = 0;

        for (let i = 0; i < this.availableCars.length; i++) {
            if (this.availableCars[i].model === model) {
                isCarAvailable = true;
                index = i;
            }
        }
        if (isCarAvailable === false) {
            throw new Error(`${model} was not found!`)
        }

        if (this.availableCars[index].mileage <= desiredMileage) {
            soldPrice = this.availableCars[index].price;

        } else if (this.availableCars[index].mileage - desiredMileage <= 40000) {
            //reduced by 5%
            soldPrice = this.availableCars[index].price * 0.95;
        } else {
            //reduced by 10%
            soldPrice = this.availableCars[index].price * 0.90;
        }
        this.soldCars.push({ model: this.availableCars[index].model, horsepower: this.availableCars[index].horsepower, soldPrice })
        this.availableCars.splice(index, 1);
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }
    currentCar() {

        if (this.availableCars.length === 0) {
            return "There are no available cars";
        } else {
            let arr = [];
            arr.push("-Available cars:");

            for (const car of this.availableCars) {
                arr.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
            }
            return arr.join("\n");
        }
    }
    salesReport(criteria) {
        let sorted;
        if (criteria === "horsepower") {

            sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === "model") {
            sorted = this.soldCars.sort((a,b)=>(a.model).localeCompare(b.model));

        } else {
            throw new Error("Invalid criteria!");
        }
        let arr=[];
        arr.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        arr.push(`-${this.soldCars.length} cars sold:`);
        for (const car of sorted) {
            arr.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        }
        return arr.join("\n");
    }
}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('audi', 120, 4900, 240000));
console.log(dealership.sellCar('audi', 240000));
console.log(dealership.sellCar('Mercedes C63', 240000));
console.log(dealership.salesReport("horsepower"));



