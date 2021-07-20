// const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test("checks if all employees have an id", () => {
	const id = 1;
	const employee = new Employee(id);

	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.getId()).toBe(id);
});

test("checks if each employee has a name", () => {
	const name = "trandleban";
	const employee = new Employee(1, name);

	expect(employee.name).toEqual(expect.any(String));
	expect(employee.getName()).toBe(name);
});

test("checks if each employee has an email", () => {
	const email = "bramble@email.com";
	const employee = new Employee(1, "name", email);

	expect(employee.email).toEqual(expect.any(String));
	expect(employee.getEmail()).toBe(email);
});

test("checks employee role", () => {
	const employeeRole = "Employee";
	const employee = new Employee(1, "trandleban", "bramble@email.com");
	expect(employee.getRole()).toBe(employeeRole);
});
