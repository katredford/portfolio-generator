const Employee = require("./Employees");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// super is pulling from the Employee class
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return "Manager";
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

module.exports = Manager;
