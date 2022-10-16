let {assert, expect} = require("chai");
let StringBuilder = require("../stringBuilder")

describe("test Class", ()=>{
    describe("create a new StringBuilder", ()=>{
        it("constructor should create an instance without a string given", ()=>{
            let str = new StringBuilder();
            expect(str._stringArray).to.be.empty;

        })
        it("constructor should create an instance with a string given", ()=>{
            let str = new StringBuilder("Hello");
            let array = ["H","e","l","l","o"];
            expect(str._stringArray[0]).to.be.equal("H");
            expect(str._stringArray[1]).to.be.equal("e");
            expect(str._stringArray[2]).to.be.equal("l");
            expect(str._stringArray[4]).to.be.equal("o");
            
        })
        it("constructor should throw error if arg is not a string", ()=>{
            
            assert.throws(()=>{new StringBuilder(5)}, 'Argument must be a string');
            assert.throws(()=>{new StringBuilder(null)}, 'Argument must be a string');
            assert.throws(()=>{new StringBuilder(true)}, 'Argument must be a string');
            assert.throws(()=>{new StringBuilder([])}, 'Argument must be a string');
            assert.throws(()=>{new StringBuilder({})}, 'Argument must be a string');
          
            
        })
        it("append should add chars at the end of the array", ()=>{
            let str = new StringBuilder("Hello");
            str.append("User");
            expect(str._stringArray[4]).to.be.equal("o");
            expect(str._stringArray[5]).to.be.equal("U");
            expect(str._stringArray[6]).to.be.equal("s");
            expect(str._stringArray[7]).to.be.equal("e");
            expect(str._stringArray[8]).to.be.equal("r");
  
          
            
        })
        it("append should throw an error if not str", ()=>{
            let str = new StringBuilder("Hello");
            assert.throws(()=>{str.append(5)}, 'Argument must be a string');
            assert.throws(()=>{str.append(null)}, 'Argument must be a string');
            assert.throws(()=>{str.append(true)}, 'Argument must be a string');
            assert.throws(()=>{str.append([])}, 'Argument must be a string');
            assert.throws(()=>{str.append({})}, 'Argument must be a string');
           
        })
        it("prepend should add chars at the beginning of the array", ()=>{
            let str = new StringBuilder("Hello");
            str.prepend("User");
            expect(str._stringArray[0]).to.be.equal("U");
            expect(str._stringArray[1]).to.be.equal("s");
            expect(str._stringArray[2]).to.be.equal("e");
            expect(str._stringArray[3]).to.be.equal("r");
            expect(str._stringArray[4]).to.be.equal("H");
  
        })
        it("prepend should throw an error if not str", ()=>{
            let str = new StringBuilder("Hello");
            assert.throws(()=>{str.prepend(5)}, 'Argument must be a string');
            assert.throws(()=>{str.prepend(null)}, 'Argument must be a string');
            assert.throws(()=>{str.prepend(true)}, 'Argument must be a string');
            assert.throws(()=>{str.prepend([])}, 'Argument must be a string');
            assert.throws(()=>{str.prepend({})}, 'Argument must be a string');
           
        })
        it("insertAt should add chars at given index", ()=>{
            let str = new StringBuilder("Hello");
            str.insertAt("User", 1);
            expect(str._stringArray[0]).to.be.equal("H");
            expect(str._stringArray[1]).to.be.equal("U");
            expect(str._stringArray[2]).to.be.equal("s");
            expect(str._stringArray[3]).to.be.equal("e");
            expect(str._stringArray[4]).to.be.equal("r");
            expect(str._stringArray[5]).to.be.equal("e");
  
        })
        it("insertAt should throw an error if not str", ()=>{
            let str = new StringBuilder("Hello");
            assert.throws(()=>{str.insertAt(5, 1)}, 'Argument must be a string');
            assert.throws(()=>{str.insertAt(null, 1)}, 'Argument must be a string');
            assert.throws(()=>{str.insertAt(true, 1)}, 'Argument must be a string');
            assert.throws(()=>{str.insertAt([], 1)}, 'Argument must be a string');
            assert.throws(()=>{str.insertAt({}, 1)}, 'Argument must be a string');
           
        })
        it("remove should remove chars at given index and length", ()=>{
            let str = new StringBuilder("Hello");
            str.remove(1, 2);
            expect(str._stringArray[0]).to.be.equal("H");
            expect(str._stringArray[1]).to.be.equal("l");
            expect(str._stringArray[2]).to.be.equal("o");
        })
        it("toString should join all char elements", ()=>{
            let str = new StringBuilder("Hello");
            str.append(" there!");
            str.prepend("User, ");
            expect(str.toString()).to.be.equal("User, Hello there!");
        })

    })
})
