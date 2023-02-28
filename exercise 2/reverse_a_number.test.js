const reverse_a_number = require("./reverse_a_number")


describe("basic tests", () => {
    it("should reverse an integer 12345", () => {
        const result = reverse_a_number("12345");
        expect(result).toEqual("54321")
    })

    it("should reverse a long integer 14325306222233334444", () => {
        const result = reverse_a_number("14325306222233334444");
        expect(result).toEqual("44443333222260352341")
    })

    it("should reverse double space", () => {
        const result = reverse_a_number("1  2  3  4  5");
        expect(result).toEqual("5  4  3  2  1")
    })

    it("empty string should retrun empty", () => {
        const result = reverse_a_number("");
        expect(result).toEqual("")
    })

    it("it should return null as null", () => {
        const result = reverse_a_number(null);
        expect(result).toEqual(null)
    }) // ask whether you would test for null
    

})

