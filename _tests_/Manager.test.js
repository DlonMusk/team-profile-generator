const Manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Create Manager", () => {
        it("should create a Manager Object with set parameters", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const officeNum = 4;
            const testEmployee = new Manager(name, id, email, officeNum);

            expect(testEmployee.officeNum).toBe(officeNum);
        });
    });
});