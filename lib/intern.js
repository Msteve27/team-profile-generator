// Engineer extends Employee -> github
const Employee = require('./Employee')

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email)
		this.github = github
	}

	getGithub() {
		this.github = github
	}	

	getRole() {
		return Engineer
	}
}