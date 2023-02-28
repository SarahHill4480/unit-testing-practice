// 1. should return -1

// 2. should negate an integer

// 3. should not make a negative number positive

// 4. should not accept non numeric parameter

// 5. should accept floating point numbers






const makeNegative = require("./makeNegative")


describe("basic tests", () => {
    it("should return -1", () =>{
        const result = makeNegative(1)
        expect(result).toEqual(-1)

    })

    it("should negate an integer ", () =>{
        const result = makeNegative(2)
        expect(result).toEqual(-2)

    })

    it("should not make a negative number positive ", () =>{
        const result = makeNegative(-2)
        expect(result).toEqual(-2)

    })

    it("should not accept non numeric parameter", () =>{
        const result = makeNegative('a')
        expect(result).toEqual('this is NaN')

    })

    it("should accept floating point numbers", () =>{
        const result = makeNegative(2.55)
        expect(result).toEqual(-2.55)

    })
   
    
})
