let {assert} = require("chai");
let {isOddOrEven} = require("../evenOrOdd");

describe("check is odd or even functionality", ()=>{
    it("should return undefined if argument is not string", ()=>{
        assert.equal(isOddOrEven(56), undefined);
        assert.equal(isOddOrEven([]), undefined);
    })
    it("should return odd", ()=>{
        assert.equal(isOddOrEven("softUni"), "odd");
        assert.equal(isOddOrEven("Petya"), "odd");
        assert.equal(isOddOrEven("1"), "odd");
    })
    it("should return even", ()=>{
        assert.equal(isOddOrEven("Petyaa"), "even");
        assert.equal(isOddOrEven(""), "even");
        assert.equal(isOddOrEven("26"), "even");
    })
})