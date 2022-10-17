let {assert} = require("chai");
let {rentCar} = require("./rentCar");

describe("test rentCar", ()=>{
    describe("test searchCar", ()=>{
        it("should throw Error if invalid input", ()=>{
            
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 5)}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 6.4)}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined)}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], null)}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], true)}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], [])}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(5, "Audi")}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar({}, "Audi")}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(true, "Audi")}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar("Model", "Audi")}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(undefined, "Audi")}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar(null, "Audi")}, "Invalid input!");
            assert.throws(()=>{rentCar.searchCar("model", 5)}, "Invalid input!");

        })
        it("should throw Error if no models is shop", ()=>{
            
            assert.throws(()=>{rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Honda")}, 'There are no such models in the catalog!');
            assert.throws(()=>{rentCar.searchCar([], "Honda")}, 'There are no such models in the catalog!');

        })
        it("should return number of matching model",()=>{
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Audi"), `There is 1 car of model Audi in the catalog!`);
            assert.equal(rentCar.searchCar(["Volkswagen", "Audi", "Audi"], "Audi"), `There is 2 car of model Audi in the catalog!`);
        })

    })
    describe("test calculatePriceOfCar", ()=>{
        it("should throw an Error if invalid args", ()=>{
            assert.throws(()=>{rentCar. calculatePriceOfCar(5, 5)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar(true, 5)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar([], 5)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar({}, 5)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar(null, 5)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar(undefined, 5)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", undefined)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", null)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", [])}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", {})}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", "5")}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", true)}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar(1, "5")}, "Invalid input!");
            assert.throws(()=>{rentCar. calculatePriceOfCar("Audi", 2.5)}, "Invalid input!");
        })
        it("should throw an Error no model in catalogue", ()=>{
            assert.throws(()=>{rentCar. calculatePriceOfCar("Honda", 5)}, 'No such model in the catalog!');
            assert.throws(()=>{rentCar. calculatePriceOfCar("Seat", 5)}, 'No such model in the catalog!');
          
        })
        it("should should return model and price for given days",()=>{
            assert.equal(rentCar.calculatePriceOfCar("Audi", 1), `You choose Audi and it will cost $36!`);
            assert.equal(rentCar.calculatePriceOfCar("Mercedes", 2), `You choose Mercedes and it will cost $100!`);
        })
    })
    describe("test checkBudget", ()=>{
        it("should throw an error if invalid parameters", ()=>{
            assert.throws(()=>{rentCar.checkBudget("5", 5, 5)}, "Invalid input!");
            assert.throws(()=>{rentCar.checkBudget(5, "5", 5)}, "Invalid input!");
            assert.throws(()=>{rentCar.checkBudget(5, 5, "5")}, "Invalid input!");
            assert.throws(()=>{rentCar.checkBudget("5", "5", "5")}, "Invalid input!");
            assert.throws(()=>{rentCar.checkBudget(2, 1.5, 3)}, "Invalid input!");
        })
        it("should return a message that needs a bigger budget", ()=>{
            assert.equal(rentCar.checkBudget(5, 5, 10), 'You need a bigger budget!');
            assert.equal(rentCar.checkBudget(1, 1, 0), 'You need a bigger budget!');
        })
        it("should return rent a car", ()=>{
            assert.equal(rentCar.checkBudget(5, 5, 25), `You rent a car!`);
            assert.equal(rentCar.checkBudget(5, 5, 50), `You rent a car!`);
        })
    })
})