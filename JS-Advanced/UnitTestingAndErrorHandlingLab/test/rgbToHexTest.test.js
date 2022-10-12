let { assert, expect, should } = require("chai");

let { rgbToHexColor } = require("../rgbToHex");

describe("check functionality of RGB to Hex", () => {

    it("should return undefined if any color is not integer", () => {

        expect(rgbToHexColor("red", 1, 254)).to.be.undefined;
        expect(rgbToHexColor(13, "green", 254)).to.be.undefined;
        expect(rgbToHexColor(25, 188, "blue")).to.be.undefined;

    })
    it("should return undefined if args are not in range[0-255]", () => {
        expect(rgbToHexColor(256, 180, 254)).to.be.undefined;
        expect(rgbToHexColor(-1, 180, 254)).to.be.undefined;

        expect(rgbToHexColor(60, 300, 190)).to.be.undefined;
        expect(rgbToHexColor(80, -3, 90)).to.be.undefined;

        expect(rgbToHexColor(25, 180, 280)).to.be.undefined;
        expect(rgbToHexColor(8, 10, -300)).to.be.undefined;

    })
    it("should return undefined if red undefined", () => {
        let result = rgbToHexColor(undefined, 1, 254);
        expect(result).to.be.undefined;
    })
    it("should return undefined if red null", () => {
        let result = rgbToHexColor(null, 1, 254);
        expect(result).to.be.undefined;
    })

    it("should return undefined if red is boolean", () => {
        let result = rgbToHexColor(true, 180, 254);
        expect(result).to.be.undefined;
    })
    it("should return undefined if red is array", () => {
        let result = rgbToHexColor([], 180, 254);
        expect(result).to.be.undefined;
    })

    it("should return undefined if green is undefined", () => {
        let result = rgbToHexColor(13, undefined, 254);
        expect(result).to.be.undefined;
    })
    it("should return undefined if green is null", () => {
        let result = rgbToHexColor(13, null, 254);
        expect(result).to.be.undefined;
    })

    it("should return undefined if green is boolean", () => {
        let result = rgbToHexColor(7, false, 254);
        expect(result).to.be.undefined;
    })
    it("should return undefined if green is array", () => {
        let result = rgbToHexColor(7, [1], 254);
        expect(result).to.be.undefined;
    })

    it("should return undefined if blue is undefined", () => {
        let result = rgbToHexColor(25, 188, undefined);
        expect(result).to.be.undefined;
    })
    it("should return undefined if blue is null", () => {
        let result = rgbToHexColor(25, 188, null);
        expect(result).to.be.undefined;
    })

    it("should return undefined if blue is boolean", () => {
        let result = rgbToHexColor(9, 180, true);
        expect(result).to.be.undefined;
    })
    it("should return undefined if blue is array", () => {
        let result = rgbToHexColor(9, 180, [1, 2]);
        expect(result).to.be.undefined;

    })

    it("should return correct color", () => {
        expect(rgbToHexColor(148, 141, 121)).to.be.equal("#948D79");
        expect(rgbToHexColor(1, 2, 3)).to.be.equal("#010203");
        expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
        expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
        expect(rgbToHexColor(0, 0, 255)).to.be.equal("#0000FF");
        expect(rgbToHexColor(255, 0, 0)).to.be.equal("#FF0000");
        expect(rgbToHexColor(0, 255, 0)).to.be.equal("#00FF00");
    })

})