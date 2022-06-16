const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Create Employee", () => {
        it("should create an employee object with set parameters", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const testEmployee = new Employee(name, id, email);

            expect(testEmployee.name).toBe(name);
            expect(testEmployee.id).toBe(id);
            expect(testEmployee.email).toBe(email);
        });
    });

    describe("getName", () => {
        it("Should return the name of the Employee", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const testEmployee = new Employee(name, id, email); 

            expect(testEmployee.getName()).toBe(name);
        });
    });

    describe("getID", () => {
        it("Should return the ID of the Employee", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const testEmployee = new Employee(name, id, email);

            expect(testEmployee.getID()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("Should return the email of the Employee", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const testEmployee = new Employee(name, id, email);

            expect(testEmployee.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it("Should return the role of the Employee", () => {
            const name = 'jeff';
            const id = 2;
            const email = 'jeff@hotmail.com';
            const testEmployee = new Employee(name, id, email);

            expect(testEmployee.getRole()).toBe('Employee');
        });
    });
});