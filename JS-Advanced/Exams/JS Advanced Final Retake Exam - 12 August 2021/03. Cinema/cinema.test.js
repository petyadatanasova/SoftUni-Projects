let { assert, should } = require("chai");
let { cinema } = require("./cinema");

describe("test cinema", () => {
    describe("test showMovies", () => {
        it("should return that no movies", ()=>{
            assert.equal(cinema.showMovies([]), "There are currently no movies to show.");
        })
        it("should return movies", ()=>{
            assert.equal(cinema.showMovies([`King Kong`, `The Tomorrow War`, `Joker`]), "King Kong, The Tomorrow War, Joker");
            assert.equal(cinema.showMovies([`King Kong`]), "King Kong");
        })
        describe("test ticketPrice", ()=>{
            it("should throw an error if invalid arg", ()=>{
                assert.throw(()=>{cinema.ticketPrice("invalid")}, "Invalid projection type.");
                assert.throw(()=>{cinema.ticketPrice("normal")}, "Invalid projection type.");
            })
            it("should return price", ()=>{
                assert.equal(cinema.ticketPrice("Normal"), 7.50);
                assert.equal(cinema.ticketPrice("Premiere"), 12.00);
                assert.equal(cinema.ticketPrice("Discount"), 5.50);
            })
        })
        describe("test swapSeatsInHall", ()=>{
            it("should not be able to swap seats", ()=>{
                assert.equal(cinema.swapSeatsInHall(1.5, 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(true, 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall("5", 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(undefined, 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(-5, 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(0, 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(21, 5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, 0), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, "0"), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, 2.5), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, true), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, null), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, -6), "Unsuccessful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(6, 52), "Unsuccessful change of seats in the hall.");
            })
            it("should swap seats", ()=>{
                assert.equal(cinema.swapSeatsInHall(10, 5), "Successful change of seats in the hall.");
                assert.equal(cinema.swapSeatsInHall(1, 20), "Successful change of seats in the hall.");
            })
        })
    })
})