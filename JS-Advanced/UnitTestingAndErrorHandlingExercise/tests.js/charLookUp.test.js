let {assert} = require("chai");
let {lookupChar} = require("../charLookup");

describe("test look up functionality", ()=>{
    it("should return undefined if parameters are not correct type",()=>{
        assert.equal(lookupChar(56, 1), undefined);
        assert.equal(lookupChar([], 0), undefined);
        assert.equal(lookupChar(true, 5), undefined);
        assert.equal(lookupChar("string", "5"), undefined);
        assert.equal(lookupChar("string", [1]), undefined);
        assert.equal(lookupChar("test", 1.5), undefined);
        assert.equal(lookupChar("test", -1.5), undefined);
        assert.equal(lookupChar(56, "test"), undefined);
        assert.equal(lookupChar("string", true), undefined);
        assert.equal(lookupChar(false, false), undefined);
    })
    it("should return Incorrect index if index is less than 0 or bigger then length of string", ()=>{
        assert.equal(lookupChar("test test test", -1), "Incorrect index");
        assert.equal(lookupChar("test", 4), "Incorrect index");
        assert.equal(lookupChar("", 0), "Incorrect index"); 
        assert.equal(lookupChar("test", 6), "Incorrect index"); 
    })
    it("should return the character at the given index", ()=>{
        assert.equal(lookupChar("test", 3), "t");
        assert.equal(lookupChar("Petya", 0), "P");
        assert.equal(lookupChar("     H", 1), " ");
        assert.equal(lookupChar("123456", 5), "6");
    })
})