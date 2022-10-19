let { assert } = require("chai");
let { library } = require("./library");

describe("test library", () => {
    describe("test calcPriceOfBook ", () => {
        it("should throw an error in args are invalid", () => {
            assert.throw(() => { library.calcPriceOfBook(true, 5) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook(undefined, 5) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook(null, 5) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook(5, 5) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook([], 5) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook("nameOfBook", "5") }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook("nameOfBook", true) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook("nameOfBook", null) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook("nameOfBook", undefined) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook("nameOfBook", 1.5) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook("nameOfBook", []) }, "Invalid input");
            assert.throw(() => { library.calcPriceOfBook(5, "5") }, "Invalid input");


        })
        it("should return diecounted price", () => {
            assert.equal(library.calcPriceOfBook("nameOfBook", 1979), `Price of nameOfBook is 10.00`);
            assert.equal(library.calcPriceOfBook("nameOfBook", 1980), `Price of nameOfBook is 10.00`);
        })
        it("should return price", () => {
            assert.equal(library.calcPriceOfBook("nameOfBook", 1981), `Price of nameOfBook is 20.00`);
            assert.equal(library.calcPriceOfBook("nameOfBook", 2000), `Price of nameOfBook is 20.00`);
        })
    })
    describe("test findBook", () => {
        it("should throw an error if empty array", () => {
            assert.throw(() => { library.findBook([], 1990) }, "No books currently available");
        })
        it("should not find book", () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Book"), "The book you are looking for is not here!");
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Life"), "The book you are looking for is not here!");
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "troy"), "The book you are looking for is not here!");
        })
        it("should find book", () => {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Troy"), "We found the book you want.");
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Life Style"), "We found the book you want.");
        })
    })
    describe("test arrangeTheBooks", () => {
        it("should throw an error if invalid number ", () => {
            assert.throw(() => { library.arrangeTheBooks("5") }, "Invalid input");
            assert.throw(() => { library.arrangeTheBooks(true) }, "Invalid input");
            assert.throw(() => { library.arrangeTheBooks(-1) }, "Invalid input");
            assert.throw(() => { library.arrangeTheBooks(1.5) }, "Invalid input");
            assert.throw(() => { library.arrangeTheBooks(undefined) }, "Invalid input");
            assert.throw(() => { library.arrangeTheBooks(null) }, "Invalid input");
            assert.throw(() => { library.arrangeTheBooks([]) }, "Invalid input");
        })
        it("should not be able to arrange books", ()=>{
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");
            assert.equal(library.arrangeTheBooks(60), "Insufficient space, more shelves need to be purchased.");
        })
        it("should be able to arrange books", ()=>{
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
            assert.equal(library.arrangeTheBooks(5), "Great job, the books are arranged.");
        })
    })
})