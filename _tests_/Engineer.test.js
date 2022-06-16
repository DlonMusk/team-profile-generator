const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Create Engineer", () => {
        it("should create a Engineer Object with set parameters", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const github = 'jeffgit';
            const testEmployee = new Engineer(name, id, email, github);

            expect(testEmployee.github).toBe(github);
        });
    });

    describe("getGithub", () => {
        it("Should return the Engineer objects GitHub", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const github = 'jeffgit';
            const testEmployee = new Engineer(name, id, email, github);

            expect(testEmployee.getGithub()).toBe(github);
        })
    })
});