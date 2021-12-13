const Employee = require('../lib/Employee')
const Engineer = require('../lib/Engineer')


test('Creates a new employee', () => {
    const newEngineer = new Engineer ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: engineer')
    expect(typeof(newEngineer)).toBe('object')
});

test('retrieves name', () => {
    const newEngineer = new Engineer ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: engineer')
    expect(newEngineer.getName()).toBe('Matt')
});

test('retrieves ID', () => {
    const newEngineer = new Engineer ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: engineer')
    expect(newEngineer.getId()).toBe('27')
});

test('retrieves email', () => {
    const newEngineer = new Engineer ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: engineer')
    expect(newEngineer.getEmail()).toBe('msteve27@vols.utk.edu')
});

test('retrieves GitHub', () => {
    const newEngineer = new Engineer ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: engineer')
    expect(newEngineer.getGithub()).toBe('Msteve27')
});


test('retrieves Role', () => {
    const newEngineer = new Engineer ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: engineer')
    expect(newEngineer.getRole()).toBe('Title: engineer')
});