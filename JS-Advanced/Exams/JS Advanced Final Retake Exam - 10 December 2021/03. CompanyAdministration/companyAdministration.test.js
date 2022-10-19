const { assert } = require("chai");
let { companyAdministration } = require("./companyAdministration");

describe("test companyAdministration", () => {
    describe("test hiringEmployee ", () => {
        it("should throw an error if no correct position", () => {
            assert.throw(() => { companyAdministration.hiringEmployee("John", "Teacher", 3) }, `We are not looking for workers for this position.`);
            assert.throw(() => { companyAdministration.hiringEmployee("John", "Doctor", 10) }, `We are not looking for workers for this position.`);
        })
        it("should return message that he is not approved", () => {
            assert.equal(companyAdministration.hiringEmployee("John", "Programmer", 2), `John is not approved for this position.`);
            assert.equal(companyAdministration.hiringEmployee("John", "Programmer", 0), `John is not approved for this position.`);
        })
        it("should return message that he is hired", () => {
            assert.equal(companyAdministration.hiringEmployee("John", "Programmer", 3), `John was successfully hired for the position Programmer.`);
            assert.equal(companyAdministration.hiringEmployee("Lilly", "Programmer", 10), `Lilly was successfully hired for the position Programmer.`);
        })
    })
    describe("test calculateSalary ", () => {
        it("should throw an error if arg is not a number or negative number", () => {
            assert.throw(() => { companyAdministration.calculateSalary(-1) }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary("-1") }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary([]) }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary(null) }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary(undefined) }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary(true) }, "Invalid hours");
            assert.throw(() => { companyAdministration.calculateSalary({}) }, "Invalid hours");

        })
        it("should return salary of EE", () => {
            assert.equal(companyAdministration.calculateSalary(2), 30);
            assert.equal(companyAdministration.calculateSalary(0), 0);
            assert.equal(companyAdministration.calculateSalary(1), 15);
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        })
        it("should return salary of EE with bonus", () => {

            assert.equal(companyAdministration.calculateSalary(161), 3415);
            assert.equal(companyAdministration.calculateSalary(170), 3550);
        })
    })
    describe("test firedEmployee ", () => {
        it("should throw an error if invalid args ", () => {
            assert.throw(() => { companyAdministration.firedEmployee(1, 1) }, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(true, 1)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee("1", 1)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee({}, 1)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(undefined, 1)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(null, 1)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], -1)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], 5)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], "5")}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], undefined)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], null)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], true)}, "Invalid input");
            assert.throw(()=>{companyAdministration.firedEmployee(["Petar", "Ivan"], [])}, "Invalid input");
        })
        it("should delet an employee", ()=>{
            assert.equal(companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 0), "Ivan, George");
            assert.equal(companyAdministration.firedEmployee(["Peter", "Ivan", "George"], 1), "Peter, George");
            assert.equal(companyAdministration.firedEmployee(["Peter"], 0), "");
        })
    })
})
