const substrings = require("./substrings")


describe("basic tests", () => {
    it("should break string into substrings", () => {
        const result = substrings('d' 'o' 'do' 'g' 'dg' 'og' 'dog');
        expect(result).toEqual(true) //Does this have to be boolean 
    })



    

    
})

