let {assert, expect} =require("chai");
let {isSymmetric} = require("../checkForSymmetry");

describe("check if an Array is symetric", ()=>{
    it("should return false if array is not an array", ()=>{
        
        expect(isSymmetric(1)).to.be.false;
        expect(isSymmetric("two")).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric({name: "lili"})).to.be.false;
        expect(isSymmetric(5.2)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(0)).to.be.false;
        expect(isSymmetric(true)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric(Symbol)).to.be.false;
    })
    it("should return false if array is not symetric", ()=>{
        let result = isSymmetric([1, 2, 3]);
        expect(result).to.be.false;
    })
    it("should return true if array is empty", ()=>{
        let result = isSymmetric([]);
        expect(result).to.be.true;
    })
    it("should return false if array is not symetric(using strings)", ()=>{
        let result = isSymmetric(["1"," 2", "two"]);
        expect(result).to.be.false;
    })
    it("should return true if array is symetric with 5 parameters", ()=>{
        let result = isSymmetric([1, 2, 3, 2 ,1]);
        expect(result).to.be.true;
    })
    it("should return true if array is symetric with 4 paramethers", ()=>{
        let result = isSymmetric([1, 2, 2, 1]);
        expect(result).to.be.true;
    })
    it("should return true if array is symetric(using strings)", ()=>{
        let result = isSymmetric(["one","two", "two", "one"]);
        expect(result).to.be.true;
    })
    it("should return false if array is symetric(using mixed types)", ()=>{
        let result = isSymmetric(["1","2", 2, 1]);
        expect(result).to.be.false;
    })
})