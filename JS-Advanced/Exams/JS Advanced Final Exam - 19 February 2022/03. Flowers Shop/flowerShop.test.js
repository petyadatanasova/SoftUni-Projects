let { assert } = require("chai");
let { flowerShop } = require("./flowerShop");

describe("test flowerShop", () => {
    describe("test calcPriceOfFlowers", () => {
        it("should throw an error if invalid parapeters", () => {
            assert.throws(() => { flowerShop.calcPriceOfFlowers(5, 5, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers(true, 5, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers(undefined, 5, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers(null, 5, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers([], 5, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", "5", 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", undefined, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", [], 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", null, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 1.5, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", true, 2) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 5, "2") }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 5, []) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 5, undefined) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 5, null) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 5, 1.5) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers("Rose", 5, true) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers(3, "5", true) }, "Invalid input!");
        })
        it("should return correct value", () => {
            assert.equal(flowerShop.calcPriceOfFlowers("Rose", 5, 2), 'You need $10.00 to buy Rose!');
            assert.equal(flowerShop.calcPriceOfFlowers("Rose", 5, 0), 'You need $0.00 to buy Rose!');

        })
    })
    describe("test checkFlowersAvailable", () => {
        it("should return flower", () => {
            assert.equal(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"]), `The Rose are available!`);
            assert.equal(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"]), `The Lily are available!`);
        })
        it("should return message that no flower", () => {
            assert.equal(flowerShop.checkFlowersAvailable('Flower', ["Rose", "Lily", "Orchid"]), `The Flower are sold! You need to purchase more!`);
            assert.equal(flowerShop.checkFlowersAvailable('Gardenia', []), `The Gardenia are sold! You need to purchase more!`);
        })
    })
    describe("test sellFlowers", ()=>{
        it("should throw an error if invalid parameters", ()=>{
            assert.throws(() => { flowerShop.sellFlowers(4, 5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers({}, 5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers("4", 5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(true, 5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(undefined, 5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers([], "5") }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers([], true) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers([], undefined) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers([], null) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers([], []) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers([], 1.5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(5, "5") }, "Invalid input!");

        })
        it("should return flowers sold",()=>{
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), `Rose / Orchid` );
            assert.equal(flowerShop.sellFlowers(["Rose"], 0), `` );
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), `Lily / Orchid` );
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily"], 1), `Rose` );
        })
    })
})