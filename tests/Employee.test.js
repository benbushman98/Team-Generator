const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("employee", () => {
        it("the Employee parameters should equal the consts", () => {
            const name = "Ben";
            const id = 1001;
            const email = "benbushman98@gmail.com";
            const employee = new Employee("Ben",1001,"benbushman98@gmail.com")
            expect(employee.name).toEqual(name)
            expect(employee.id).toEqual(id)
            expect(employee.email).toEqual(email)
        })
    })
})