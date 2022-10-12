let {assert, expect} = require("chai");
let {createCalculator}= require("../addSubtract");

describe("check if the function works",()=>{
    it("check add feature if adds Numbers",()=>{
        let result=createCalculator();
        result.add(5);
        expect(result.get()).to.be.equal(5)
        result.add(10);
        expect(result.get()).to.be.equal(15)
        result.add(0);
        expect(result.get()).to.be.equal(15)
        result.add("10");
        expect(result.get()).to.be.equal(25)
    })
    it("check if subtract feature works with numbers", ()=>{
        let result = createCalculator();
        result.add(10);
        result.subtract(2);
        expect(result.get()).to.be.equal(8)
        result.subtract("8");
        expect(result.get()).to.be.equal(0);
    })
    it("should return NaN if add any other type",()=>{
        let result = createCalculator();
        result.add("a");
        expect(result.get()).to.be.NaN;

    })    
    it("should return NaN if subtract any other type", ()=>{
        let result = createCalculator();
        result.subtract("a");
        expect(result.get()).to.be.NaN;
    })
})