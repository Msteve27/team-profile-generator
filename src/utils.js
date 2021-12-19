const inquirer = require('inquirer');
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')
const myTeamTemplate = require('./myTeamTemplate')
const fs = require('fs')
const path = require('path')

let team = []

const addManager = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the manager's name? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the name of the manager.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the manager's ID? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the ID of the manager.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the manager's email? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the email of the manager.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'officeNumber',
			message: "What is the manager's office number? (required)",
			validate: answer => {
				if(!answer.match(/^\d+$/)) {
					return 'You must enter the office number of the manager.'
				}
				return true
			}
		},
	]).then(answers => {
		const {name, id, email, officeNumber} = answers
		let newManager = new Manager(name, id, email, officeNumber)
		team.push(newManager)
		getTeamBuildUserInput()
	})
}
const addEngineer = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the engineer's name? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the name of the engineer.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the engineer's ID? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the ID of the engineer.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the manager's email? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the email of the manager.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'github',
			message: "What is the engineer's GitHub?",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the GitHub of the engineer.'
				}
				return true
			}
		},
	]).then(answers => {
		const {name, id, email, github} = answers
		let newEngineer = new Engineer(name, id, email, github)
		team.push(newEngineer)
		getTeamBuildUserInput()
	})
}

const addIntern = () => {
	inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is the intern's name? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the name of the intern.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'id',
			message: "What is the intern's ID? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the ID of the intern.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'email',
			message: "What is the intern's email? (required)",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the email of the intern.'
				}
				return true
			}
		},
		{
			type: 'input',
			name: 'school',
			message: "Where did the intern go to school?",
			validate: answer => {
				if(answer === "") {
					return 'You must enter the name of the school the intern went to.'
				}
				return true
			}
		},
	]).then(answers => {
		const {name, id, email, school} = answers
		let newIntern = new Intern(name, id, email, school)
		team.push(newIntern)
		getTeamBuildUserInput()
	})
}
const generateMyTeam = () => {
	console.log('writing the file')
	fs.writeFileSync(`${path.join(process.cwd())}/dist/myTeam.html`, myTeamTemplate(team), err => {
		if (err) console.log(err)
	})
}

const getTeamBuildUserInput = () => {
	inquirer
		.prompt({
				type: "list",
				message: "What team role would you like to add?",
				name: "choice",
				choices: ["Add manager", "Add engineer", "Add intern", "Finish"],
		})
		.then(({choice}) => {
			switch (choice) {
				case "Add manager":
					addManager()
					return 'add manager choice selected.'
	
				case "Add engineer":
					addEngineer()
					return 'add engineer choice selected.'
                
                case "Add intern":
                    addIntern()
                    return 'add intern choice selected.'
			
				default:
					generateMyTeam()
					process.exit()
			}
		})
}

module.exports = {addManager, addEngineer, addIntern, getTeamBuildUserInput}