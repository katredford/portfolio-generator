const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employees");

test("checks if all employees have an id", () => {
	const employeeId = 1;
	const employee = new Employee(employeeId);
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.getId().toEqual(employeeId));
});

test("checks if each employee has a name", () => {
	const employeeName = "trandleban";
	const employee = new Employee(employeeName);
	expect(employee.id).toEqual(expect.any(String));
	expect(employee.getName().toBe(employeeName));
});

test("checks if each employee has an email", () => {
	const employeeEmail = "bramble@email.com";
	const employee = new Employee(employeeEmail);
	expect(employee.id).toEqual(expect.any(String));
	expect(employee.getEmail().toBe(employeeEmail));
});

test("checks employee role", () => {
	const employeeRole = "Employee";
	const employee = new Employee(1, "trandleban", "bramble@email.com");
	expect(employee.getRole()).toBe(employeeRole);
});
