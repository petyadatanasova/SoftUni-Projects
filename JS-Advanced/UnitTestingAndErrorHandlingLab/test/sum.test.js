let {assert, expect} = require("chai");
let {sum} = require("../sumOfNumbers");

describe("check sum function", ()=>{
    it("check if the function sums all numbers from an Array", ()=>{
        let result = sum([1,2,3,4, 5]);
        expect(result).to.be.equal(15)
    })
    it("check if the function sums all numbers from an Array", ()=>{
        let result = sum([]);
        expect(result).to.be.equal(0)
    })
    it("check if the function sums all numbers from an Array", ()=>{
        let result = sum(["1","2","3"]);
        expect(result).to.be.equal(6)
    })
})