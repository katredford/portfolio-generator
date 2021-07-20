const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const createPage = require("template");

let group = [];

const promptUser = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your name?",
			},
			{
				type: "input",
				name: "email",
				message: "What is your email?",
			},
			{
				type: "input",
				name: "officeNumber",
				message: "What is your office number?",
			},
		])
		.then(function (answer) {
			console.log(answer);
			var newManager = new Manager(
				group.length,
				answer.name,
				answer.email,
				answer.officeNumber
			);
			group.push(newManager);
			addEmployee();
		});
};

const addEmployee = () => {
	inquirer
		.prompt([
			{
				type: "confirm",
				name: "confirmEmp",
				message: "Enter another employee?",
				default: false,
			},
		])
		.then(function (addAnswer) {
			if (addAnswer.confirmEmp === true) {
				console.log("Add employee!");
				employeeType();
			} else {
				console.log("profile complete!", group);

				makePage();
			}
		});
};

const internPrompt = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your name?",
			},
			{
				type: "input",
				name: "email",
				message: "What is your email?",
			},
			{
				type: "input",
				name: "school",
				message: "What is your school?",
			},
		])
		.then(function (answer) {
			var newIntern = new Intern(
				group.length,
				answer.name,
				answer.email,
				answer.school
			);
			group.push(newIntern);
			addEmployee();
		});
};

const engineerPrompt = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "What is your name?",
			},
			{
				type: "input",
				name: "email",
				message: "What is your email?",
			},
			{
				type: "input",
				name: "github",
				message: "What is your GitHub?",
			},
		])
		.then(function (answer) {
			var newEngineer = new Engineer(
				group.length,
				answer.name,
				answer.email,
				answer.github
			);
			group.push(newEngineer);
			addEmployee();
		});
};

const makePage = () => {
	const pageHTML = generatePage(group);

	console.log("HTML Data", pageHTML);
	fs.writeFile("./index.html", pageHTML, (err) => {
		if (err) throw new Error("error rendering page", err);
	});
};

promptUser();
