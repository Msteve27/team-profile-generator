// Manager extends Employee -> office number
const Employee = require('./Employee')

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email)
		this.officeNumber = officeNumber
	}

	getRole() {
		return "Title: manager"
	}	
}

module.exports = Manager