const alphabet_order = require("./alphabet_order")


describe("basic tests", () => {
    it("should put string into alphabetical order ", () => {
        const result = alphabet_order("happy")
        expect(result).toEqual("ahppy") 
    })

    it("empty string should return empty string ", () => {
        const result = alphabet_order("")
        expect(result).toEqual("") 
    })

    it("string already in order should stay the same ", () => {
        const result = alphabet_order("abcdef")
        expect(result).toEqual("abcdef") 
    })

    it("string already in order should stay the same ", () => {
        const result = alphabet_order("a   b   f   z  f")
        expect(result).toMatch("abffz") //contains this string even with white space
    })

    it("string already in order should stay the same ", () => {
        const result = alphabet_order("abcdef")
        expect(result).toEqual("abcdef") 
    })

    
})
