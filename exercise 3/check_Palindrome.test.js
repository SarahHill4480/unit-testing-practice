const check_Palindrome = require("./check_Palindrome")


describe("basic tests", () => {
    it("should identify a palindrome", () => {
        const result = check_Palindrome('madam');
        expect(result).toEqual(true) //Does this have to be boolean 
    })

    it("should identify non-palindrome", () => {
        const result = check_Palindrome('fox');
        expect(result).toEqual(false) //Does this have to be boolean 
    })


    it("should identify a palindrome that is separate words", () => {
        const result = check_Palindrome('nurses run');
        expect(result).toEqual(true) //Does this have to be boolean 
    })

    it("should identify an empty string", () => {
        const result = check_Palindrome("");
        expect(result).toEqual(false) //Does this have to be boolean 
    })

    it("should remove non alphanumeric characters", () => {
        const result = check_Palindrome("ma/d a^m");
        expect(result).toEqual(true) //Does this have to be boolean 
    })

    
})

