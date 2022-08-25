const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Engineer", () => {
        it("the Engineer parameters should equal the consts", () => {
            const name = "Ben";
            const id = 1001;
            const email = "benbushman98@gmail.com";
            const github = "benbushman98"
            const engineer = new Engineer("Ben",1001,"benbushman98@gmail.com", "benbushman98")
            expect(engineer.name).toEqual(name)
            expect(engineer.id).toEqual(id)
            expect(engineer.email).toEqual(email)
            expect(engineer.github).toEqual(github)
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
})