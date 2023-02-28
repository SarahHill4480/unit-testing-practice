const uppercase = require("./uppercase")


describe("basic tests", () => {
    it("should make the first letter of each word uppercase", () => {
        const result = uppercase("the quick brown fox")
        expect(result).toEqual("The Quick Brown Fox") 
    })

    it("empty string will return empty array", () => {
        const result = uppercase("")
        expect(result).toEqual('') 
    })


   

  
    
})
