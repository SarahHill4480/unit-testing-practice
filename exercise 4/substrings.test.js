const substrings = require("./substrings")


describe("basic tests", () => {
    it("should break string into substrings", () => {
        const result = substrings("dog")
        expect(result).toEqual(["d", "do", "dog", "o", "og", "g"]) 
    })

    it("should return empty if no string", () => {
        const result = substrings("")
        expect(result).toEqual([]) 
    })

    it("should return longer string into substrings ", () => {
        const result = substrings("abcdefg")
        expect(result).toEqual([
            'a',       'ab',    'abc',
            'abcd',    'abcde', 'abcdef',
            'abcdefg', 'b',     'bc',
            'bcd',     'bcde',  'bcdef',
            'bcdefg',  'c',     'cd',
            'cde',     'cdef',  'cdefg',
            'd',       'de',    'def',
            'defg',    'e',     'ef',
            'efg',     'f',     'fg',
            'g'
          ]) 
    })

    it("should return with special character", () => {
        const result = substrings("a!c")
        expect(result).toEqual([ 'a', 'a!', 'a!c', '!', '!c', 'c' ]) 
    })

    it("should return empty array if integer input", () => {
        const result = substrings(500)
        expect(result).toEqual([ ]) 
    })

    it("should return substrings with more than one string input", () => {
        const result = substrings('abc', 'df')
        expect(result).toEqual([ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]) 
    })

    
})
