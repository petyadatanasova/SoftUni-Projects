let { assert } = require("chai");
let { dealership } = require("./dealership");

describe("Test dealership", () => {
    describe("Test newCarCost", () => {

        it("should return a price with Discount", () => {
            assert.equal(dealership.newCarCost("Audi A4 B8", 50000), 35000);
            assert.equal(dealership.newCarCost("Audi A6 4K", 50000), 30000);
            assert.equal(dealership.newCarCost("Audi A8 D5", 50000), 25000);
            assert.equal(dealership.newCarCost("Audi TT 8J", 50000), 36000);
        });
        it("should return a price without Discount", () => {
            assert.equal(dealership.newCarCost("Audi", 30000), 30000);
            assert.equal(dealership.newCarCost("BMW", 50000), 50000);

        });

    });
    describe("test carEquipment", () => {
        it("should return extras", () => {
            assert.deepEqual(dealership.carEquipment([`heated seats`, `sliding roof`, `sport rims`, `navigation`], [0, 2, 3]), [`heated seats`, `sport rims`, `navigation`]);
            assert.deepEqual(dealership.carEquipment([`heated seats`, `sliding roof`, `sport rims`, `navigation`], [0]), [`heated seats`]);
            assert.deepEqual(dealership.carEquipment([], []), []);
        })
    })
    describe("test euroCategory", ()=>{
        it("should return that no discount", ()=>{
            assert.equal(dealership.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
        })
        it("should return discounted price", ()=>{
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`);
            assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`);
        })
    })


})
