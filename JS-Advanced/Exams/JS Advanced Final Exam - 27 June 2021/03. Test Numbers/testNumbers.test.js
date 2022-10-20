let {assert} = require("chai");
let {testNumbers} = require("./testNumbers");

describe("test testNumbers", ()=>{
    describe("test sumNumber", ()=>{
        it("should return undefined if invalid args", ()=>{
            assert.equal(testNumbers.sumNumbers("5", 5), undefined);
            assert.equal(testNumbers.sumNumbers(true, 5), undefined);
            assert.equal(testNumbers.sumNumbers([], 5), undefined);
            assert.equal(testNumbers.sumNumbers(undefined, 5), undefined);
            assert.equal(testNumbers.sumNumbers(null, 5), undefined);
            assert.equal(testNumbers.sumNumbers(5, "5"), undefined);
            assert.equal(testNumbers.sumNumbers(5, true), undefined);
            assert.equal(testNumbers.sumNumbers(5, undefined), undefined);
            assert.equal(testNumbers.sumNumbers(5, []), undefined);
            assert.equal(testNumbers.sumNumbers(5, null), undefined);
            assert.equal(testNumbers.sumNumbers("5", "5"), undefined);
        })
        it("should rewturn sum", ()=>{
            assert.equal(testNumbers.sumNumbers(5, 5), 10.00);
            assert.equal(testNumbers.sumNumbers(-10, 2), -8.00);
            assert.equal(testNumbers.sumNumbers(-1, 5), 4.00);
            assert.equal(testNumbers.sumNumbers(0, 0), 0.00);
            assert.equal(testNumbers.sumNumbers(1, 1.5), 2.50);
        })
    })
    describe(("test numberChecker"), ()=>{
        it("should throw an error in arg not number", ()=>{
            assert.throws(()=>{testNumbers.numberChecker(NaN)}, "The input is not a number!");
            assert.throws(()=>{testNumbers.numberChecker(undefined)}, "The input is not a number!");
            assert.throws(()=>{testNumbers.numberChecker("string")}, "The input is not a number!");
           
        })
        it("should return odd/even", ()=>{
            assert.equal(testNumbers.numberChecker(5), 'The number is odd!')
            assert.equal(testNumbers.numberChecker(6), 'The number is even!')
            assert.equal(testNumbers.numberChecker(1), 'The number is odd!')
            assert.equal(testNumbers.numberChecker(0), 'The number is even!')
            assert.equal(testNumbers.numberChecker(-1), 'The number is odd!')
        })
    })
    describe("test averageSumArray", ()=>{
        it("should return aveSum", ()=>{
            assert.equal(testNumbers.averageSumArray([10, 20, 30]), 20)
            assert.equal(testNumbers.averageSumArray([10]), 10)
        })
    })
})