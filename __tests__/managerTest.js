const Manager = require("../lib/Manager");
const Employee = require("../lib/Employees");
test("Can set office number", () => {
	const testValue = 100;
	const e = new Manager("grandle", 3, "ramble@email.com", testValue);
	expect(e.officeNumber).toBe(testValue);
});
test('getRole() should return "Manager"', () => {
	const testValue = "Manager";
	const e = new Manager("grandle", 3, "ramble@email.com", 100);
	expect(e.getRole()).toBe(testValue);
});
test("Can get office number via getOffice()", () => {
	const testValue = 100;
	const e = new Manager("grandle", 3, "ramble@email.com", testValue);
	expect(e.getOfficeNumber()).toBe(testValue);
});
