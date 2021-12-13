const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')


test('Creates a new employee', () => {
    const newManager = new Manager ('Matt', '27','msteve27@vols.utk.edu', 'Title: manager')
    expect(typeof(newManager)).toBe('object')
});

test('retrieves name', () => {
    const newManager = new Manager ('Matt', '27','msteve27@vols.utk.edu', 'Title: manager')
    expect(newManager.getName()).toBe('Matt')
});

test('retrieves ID', () => {
    const newManager = new Manager ('Matt', '27','msteve27@vols.utk.edu', 'Title: manager')
    expect(newManager.getId()).toBe('27')
});

test('retrieves email', () => {
    const newManager = new Manager ('Matt', '27','msteve27@vols.utk.edu', 'Title: manager')
    expect(newManager.getEmail()).toBe('msteve27@vols.utk.edu')
});

test('retrieves Role', () => {
    const newManager = new Manager ('Matt', '27','msteve27@vols.utk.edu', 'Title: manager')
    expect(newManager.getRole()).toBe('Title: manager')
});