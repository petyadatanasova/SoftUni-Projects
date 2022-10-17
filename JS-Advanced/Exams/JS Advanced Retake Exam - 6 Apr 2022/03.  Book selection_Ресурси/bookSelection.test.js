let{assert} = require("chai");
let{bookSelection} = require("./bookSelection");

describe("test bookSelection", ()=>{
    describe("test isGenreSuitable ",()=>{
        it("should return that thriler and horror are not appropriate for kids", ()=>{
            assert.equal(bookSelection.isGenreSuitable("Thriller", 5), `Books with Thriller genre are not suitable for kids at 5 age`);
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), `Books with Horror genre are not suitable for kids at 12 age`);
           
        })
        it("should return that all other books are suitable", ()=>{
            assert.equal(bookSelection.isGenreSuitable("Comedy", 15), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Horror", 20), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable("Comedy", 8), `Those books are suitable`);
        })
    })
    describe("test isItAffordable",()=>{
        it("should throw an error if args are not numbers", ()=>{
            assert.throws(()=>{bookSelection.isItAffordable("5", 20)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(true, 20)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(undefined, 20)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(null, 20)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable([], 20)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(5, "20")}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(5, true)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(5, null)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable(5, undefined)}, "Invalid input");
            assert.throws(()=>{bookSelection.isItAffordable("5", "20")}, "Invalid input");

        })
        it("should not afford the book ", ()=>{
            assert.equal(bookSelection.isItAffordable(20,5), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(1,0), "You don't have enough money");
        })
        it("should afford the book", ()=>{
            assert.equal(bookSelection.isItAffordable(5,5), `Book bought. You have 0$ left`);
            assert.equal(bookSelection.isItAffordable(5,20), `Book bought. You have 15$ left`);
        })
    })
    describe("rest suitableTitles" , ()=>{
        it("should throw an error if not valid args",()=>{
            assert.throws(()=>{bookSelection.suitableTitles(5, "book")}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles("books", "book")}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles({}, "book")}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(undefined, "book")}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(null, "book")}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(["Thriller", "Commedy"], 5)}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(["Thriller", "Commedy"], true)}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(["Thriller", "Commedy"], undefined)}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(["Thriller", "Commedy"], null)}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(["Thriller", "Commedy"], [])}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles(["Thriller", "Commedy"], {})}, "Invalid input");
            assert.throws(()=>{bookSelection.suitableTitles("Book", [])}, "Invalid input");
        })
        it("should return books", ()=>{
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Thriller"), "The Da Vinci Code");
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], "Commedy"), "");
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },{ title: "Book", genre: "Thriller" }], "Thriller")[0], "The Da Vinci Code");
            assert.equal(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },{ title: "Book", genre: "Thriller" }], "Thriller")[1], 'Book');
            let arr = bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },{ title: "Book", genre: "Thriller" }], "Thriller");
            assert.equal(arr.length, 2);
        })
    })
})