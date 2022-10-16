let { assert } = require("chai");
//const { isItExpensive, discount, partsToBuy } = require("./03. Car Service_Resources");
let {carService} = require("./03. Car Service_Resources");


describe("Tests CarSevice",  ()=> {
    describe("test isItExpensive function ",  ()=> {

        it("should return that cost is more",  () =>{

            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`);
        });
        it("should return that it will be cheaper",  ()=> {

            assert.equal(carService.isItExpensive("Breaks"), `The overall price will be a bit cheaper`);
            assert.equal(carService.isItExpensive("Door"), `The overall price will be a bit cheaper`);
        });
        it("should accept only strings", ()=>{
            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`);
        })
    });
    describe("test discount", () => {
        it("should throw error of arg are not numbers", () => {

            assert.throws(() => { carService.discount("two", 100) }, "Invalid input");
            assert.throws(() => { carService.discount(true, 100) }, "Invalid input");
            assert.throws(() => { carService.discount([], 100) }, "Invalid input");
            assert.throws(() => { carService.discount(2, "100") }, "Invalid input");
            assert.throws(() => { carService.discount(2, true) }, "Invalid input");
            assert.throws(() => { carService.discount(2, []) }, "Invalid input");
            assert.throws(() => { carService.discount("two", "hundred") }, "Invalid input");
        })
        it("should apply 15% discount if parts between 2(excluding) and 7", () => {
            assert.equal(carService.discount(3, 100), `Discount applied! You saved 15$`);
            assert.equal(carService.discount(7, 200), `Discount applied! You saved 30$`);
        })
        it("should apply no discount if parts are less than 2", () => {
            assert.equal(carService.discount(2, 100), "You cannot apply a discount");
           assert.equal(carService.discount(0, 200), "You cannot apply a discount");
        })
        it("should apply 30% discount if parts are more than 7", () => {
            assert.equal(carService.discount(8, 100), `Discount applied! You saved 30$`);
           assert.equal(carService.discount(9, 200), `Discount applied! You saved 60$`);
        })
    })
    describe("test partsToBuy", () => {
        it("should throw an error if invalid input", () => {
            assert.throws(() => { carService.partsToBuy(2, 4) }, "Invalid input");
            assert.throws(() => { carService.partsToBuy("string", "string") }, "Invalid input");
            assert.throws(() => { carService.partsToBuy(true, ["valve"]) }, "Invalid input");
            assert.throws(() => { carService.partsToBuy(["valve"], "valve") }, "Invalid input");
        })
        it("should return zero if no parts in catalogue", () => {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        })
        it("should return total price", () => {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145);
         assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "coil springs"]), 375);
        })
    })

});
