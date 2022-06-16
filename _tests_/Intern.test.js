const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Create Intern", () => {
        it("should create a Intern Object with set parameters", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const school = 'Harvard';
            const testEmployee = new Intern(name, id, email, school);

            expect(testEmployee.school).toBe(school);
        });
    });

    describe("getSchool", () => {
        it("Should return the Intern objects school", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const school = 'Harvard';
            const testEmployee = new Intern(name, id, email, school);

            expect(testEmployee.getSchool()).toBe(school);
        });
    });
});