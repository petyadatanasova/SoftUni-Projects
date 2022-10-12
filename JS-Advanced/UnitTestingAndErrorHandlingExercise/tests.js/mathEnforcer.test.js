let {assert, expect} = require("chai");
let mathEnforcer = require("../mathEnforcer");
describe("Math Enforcer", ()=>{
    describe("check if Add Five function works properly", ()=>{
        it("should return undefined if arg is not a number", ()=>{
            expect(mathEnforcer.addFive("5")).to.be.undefined;
            expect(mathEnforcer.addFive([1,2])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(true)).to.be.undefined;
            expect(mathEnforcer.addFive(false)).to.be.undefined;
        })
        it("should return number+5", ()=>{
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(20)).to.be.equal(25);
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
            expect(mathEnforcer.addFive(2.5)).to.be.closeTo(7.5, 0.01)
        })
    })
    describe("check if Subtract Ten function works properly", ()=>{
        it("should return undefined if arg is not a number", ()=>{
            expect(mathEnforcer.subtractTen("5")).to.be.undefined;
            expect(mathEnforcer.subtractTen([1,2])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            expect(mathEnforcer.subtractTen(false)).to.be.undefined;
    
        })
        it("should return number-10", ()=>{
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(20.5)).to.be.closeTo(10.5, 0.01)
        })
    })
    describe("check if Sum function works properly", ()=>{
        it("should return undefined if arg is not a number", ()=>{
            expect(mathEnforcer.sum("5", 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, "5")).to.be.undefined;
            expect(mathEnforcer.sum([1,2], 6)).to.be.undefined;
            expect(mathEnforcer.sum([1,2], [])).to.be.undefined;
            expect(mathEnforcer.sum("1","1")).to.be.undefined;
            expect(mathEnforcer.sum(1, [])).to.be.undefined;
            expect(mathEnforcer.sum({}, 1)).to.be.undefined;
            expect(mathEnforcer.sum(1, {})).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
            expect(mathEnforcer.sum(true, false)).to.be.undefined;
            expect(mathEnforcer.sum(false, 6)).to.be.undefined;
            expect(mathEnforcer.sum(6, true)).to.be.undefined;
    
        })
        it("should return sum of two numbers", ()=>{
            expect(mathEnforcer.sum(15, 5)).to.be.equal(20);
            expect(mathEnforcer.sum(20, 30)).to.be.equal(50);
            expect(mathEnforcer.sum(0,1)).to.be.equal(1);
            expect(mathEnforcer.sum(-10, 3)).to.be.equal(-7);
            expect(mathEnforcer.sum(20.5, 10.3)).to.be.closeTo(30.8, 0.01)
        })
    })
})
