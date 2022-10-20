let { assert } = require("chai");
let { numberOperations } = require("./03. Number Operations_Resources");

describe("test number operations", () => {
    describe("test powNumber", () => {
        it("should", () => {
            assert.equal(numberOperations.powNumber(5), 25);
            assert.equal(numberOperations.powNumber(1), 1);
            assert.equal(numberOperations.powNumber(0), 0);
            assert.equal(numberOperations.powNumber(-2), 4);
        })
    })
    describe("test numberChecker", ()=>{
        it("should return error in NaN", ()=>{
            assert.throw(()=>{numberOperations.numberChecker("string")}, 'The input is not a number!');
            assert.throw(()=>{numberOperations.numberChecker(NaN)}, 'The input is not a number!');
        })
        it("should return number lower than 100", ()=>{
            assert.equal(numberOperations.numberChecker(-2), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(0), 'The number is lower than 100!');
        })
        it("should return number higher than 100", ()=>{
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(200), 'The number is greater or equal to 100!');
        })

    })
    describe("test sumArrays", ()=>{
        it("should return sumOfArrays", ()=>{
           
            assert.deepEqual(numberOperations.sumArrays([1,2,3],[4,5,6]), [5, 7, 9]);
            assert.deepEqual(numberOperations.sumArrays([1,2,3],[4,5]), [5, 7, 3]);
            assert.deepEqual(numberOperations.sumArrays([1],[4,5,8]), [5, 5, 8]);
            assert.deepEqual(numberOperations.sumArrays([],[4]), [4]);
            assert.deepEqual(numberOperations.sumArrays([],[]), []);
        })
    })
})