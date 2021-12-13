const Employee = require('../lib/Employee')

test('Creates a new employee', () => {
    const newEmployee = new Employee ('Matt', '27','msteve27@vols.utk.edu', 'Title: employee')
    expect(typeof(newEmployee)).toBe('object')
});

test('retrieves name', () => {
    const newEmployee = new Employee ('Matt', '27','msteve27@vols.utk.edu', 'Title: employee')
    expect(newEmployee.getName()).toBe('Matt')
});

test('retrieves ID', () => {
    const newEmployee = new Employee ('Matt', '27','msteve27@vols.utk.edu', 'Title: employee')
    expect(newEmployee.getId()).toBe('27')
});

test('retrieves email', () => {
    const newEmployee = new Employee ('Matt', '27','msteve27@vols.utk.edu', 'Title: employee')
    expect(newEmployee.getEmail()).toBe('msteve27@vols.utk.edu')
});

test('retrieves Role', () => {
    const newEmployee = new Employee ('Matt', '27','msteve27@vols.utk.edu', 'Title: employee')
    expect(newEmployee.getRole()).toBe('Title: employee')
});