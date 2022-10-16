 let {assert, expect} = require("chai");
 let PaymentPackage = require("../paymentPackage")

 describe("testPaymentPackgeClass", ()=>{
    describe("test ", ()=>{
        it("should create a paymentPackage", ()=>{
            let p = new PaymentPackage("HR", 600);
            assert.equal(p.name, "HR");
            assert.equal(p.value, 600);
            assert.equal(p.VAT, 20);
            assert.equal(p.active, true);
            p.name=" ";
            assert.equal(p.name, " ");
            p.value=0;
            assert.equal(p.value, 0);
            p.VAT=0;
            assert.equal(p.VAT, 0);
            p.active=false;
            assert.equal(p.active, false);
        })
        it("setter should throw error if name not set properly", ()=>{
            
            expect(()=>new PaymentPackage("", 600)).to.throw(Error);
            assert.throws(()=>{new PaymentPackage(0, 600)}, 'Name must be a non-empty string');
            assert.throws(()=>{new PaymentPackage(-5, 600)}, 'Name must be a non-empty string');
            assert.throws(()=>{new PaymentPackage(undefined, 600)}, 'Name must be a non-empty string');
            assert.throws(()=>{new PaymentPackage(true, 600)}, 'Name must be a non-empty string');
            assert.throws(()=>{new PaymentPackage([], 600)}, 'Name must be a non-empty string');
            assert.throws(()=>{new PaymentPackage({}, 600)}, 'Name must be a non-empty string');
            assert.throws(()=>{new PaymentPackage(null, 600)}, 'Name must be a non-empty string');
        })
        it("setter should throw error if value not set properly", ()=>{
            
            expect(()=>new PaymentPackage("HR", -1)).to.throw(Error);
            assert.throws(()=>{new PaymentPackage("HR", "")}, 'Value must be a non-negative number');
            assert.throws(()=>{new PaymentPackage("HR", "5")}, 'Value must be a non-negative number');
            assert.throws(()=>{new PaymentPackage("HR", true)}, 'Value must be a non-negative number');
            assert.throws(()=>{new PaymentPackage("HR", [])}, 'Value must be a non-negative number');
            assert.throws(()=>{new PaymentPackage("HR", {})}, 'Value must be a non-negative number');
            assert.throws(()=>{new PaymentPackage("HR", undefined)}, 'Value must be a non-negative number');
            assert.throws(()=>{new PaymentPackage("HR", null)}, 'Value must be a non-negative number');
        })
        it("setter should throw error if VAT not set properly", ()=>{
            let p = new PaymentPackage("HR", 600);

            assert.throws(()=>{p.VAT=-1}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT="vat"}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT="5"}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT=false}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT=undefined}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT=null}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT=""}, 'VAT must be a non-negative number');
            assert.throws(()=>{p.VAT=[]}, 'VAT must be a non-negative number');
        })
        it("setter should throw error if active not set properly", ()=>{
            let p = new PaymentPackage("HR", 600);

            assert.throws(()=>{p.active=-1}, 'Active status must be a boolean');
            assert.throws(()=>{p.active=3}, 'Active status must be a boolean');
            assert.throws(()=>{p.active="vat"}, 'Active status must be a boolean');
            assert.throws(()=>{p.active=undefined}, 'Active status must be a boolean');
            assert.throws(()=>{p.active=null}, 'Active status must be a boolean');
            assert.throws(()=>{p.active=""}, 'Active status must be a boolean');
            assert.throws(()=>{p.active=[]}, 'Active status must be a boolean');

        })
        it("toString method should work properly - active", ()=>{
            let p = new PaymentPackage("HR Services", 1500);

            assert.equal(p.toString(), "Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");

        })
        it("toString method should work properly - inactive", ()=>{
            let p = new PaymentPackage("HR Services", 1500);
            p.active=false;
            assert.equal(p.toString(), "Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");

        })

    })
 })