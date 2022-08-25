const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Intern", () => {
        it("the Intern parameters should equal the consts", () => {
            const name = "Ben";
            const id = 1001;
            const email = "benbushman98@gmail.com";
            const school = "University of Utah"
            const intern = new Intern("Ben",1001,"benbushman98@gmail.com", "University of Utah")
            expect(intern.name).toEqual(name)
            expect(intern.id).toEqual(id)
            expect(intern.email).toEqual(email)
            expect(intern.school).toEqual(school)
            expect(intern.getRole()).toEqual("Intern")
        })
    })
})