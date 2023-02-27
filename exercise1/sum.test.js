const sum = require("./sum")

//can group tests together
describe("example tests", () => {
    it("should add 1 + 2 to equal 3",() => {
        const result = sum(1, 2);
        expect(result).toBe(3)
    })

    it("object assignement", () =>{
        const obj= {};
        expect(obj).toEqual({})
    })

})


describe("truthy or falsey", () => {
    it("null", () =>{
        const n = null;
        expect(n).toBeFalsy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })
})

describe("numbers", () => {
    it("two plus two", () =>{
        const value = 2 + 2;
        expect(value).toBe(4)
        expect(value).toBeGreaterThan(3)
    })

    it("adding floats", () =>{
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3)
    })
})





// .toBe