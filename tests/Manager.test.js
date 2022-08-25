const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Manager", () => {
        it("the Manager parameters should equal the consts", () => {
            const name = "Ben";
            const id = 1001;
            const email = "benbushman98@gmail.com";
            const officeNumber = "801-372-1410"
            const manager = new Manager("Ben",1001,"benbushman98@gmail.com", "801-372-1410")
            expect(manager.name).toEqual(name)
            expect(manager.id).toEqual(id)
            expect(manager.email).toEqual(email)
            expect(manager.officeNumber).toEqual(officeNumber)
            expect(manager.getRole()).toEqual("Manager")
        })
    })
})