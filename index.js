const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const createPage = require("template");

let group = [];

const promptUser = () => {
	inquirer.prompt([
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
	]);
};
