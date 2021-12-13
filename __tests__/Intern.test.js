const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')


test('Creates a new employee', () => {
    const newIntern = new Intern ('Matt', '27','msteve27@vols.utk.edu', 'University of Tennessee', 'Title: intern')
    expect(typeof(newIntern)).toBe('object')
});

test('retrieves name', () => {
    const newIntern = new Intern ('Matt', '27','msteve27@vols.utk.edu', 'University of Tennessee', 'Title: intern')
    expect(newIntern.getName()).toBe('Matt')
});

test('retrieves ID', () => {
    const newIntern = new Intern ('Matt', '27','msteve27@vols.utk.edu', 'University of Tennessee', 'Title: intern')
    expect(newIntern.getId()).toBe('27')
});

test('retrieves email', () => {
    const newIntern = new Intern ('Matt', '27','msteve27@vols.utk.edu', 'University of Tennessee', 'Title: intern')
    expect(newIntern.getEmail()).toBe('msteve27@vols.utk.edu')
});

test('retrieves School', () => {
    const newIntern = new Intern ('Matt', '27','msteve27@vols.utk.edu', 'University of Tennessee', 'Title: intern')
    expect(newIntern.getSchool()).toBe('University of Tennessee')
});


test('retrieves Role', () => {
    const newIntern = new Intern ('Matt', '27','msteve27@vols.utk.edu', 'Msteve27', 'Title: intern')
    expect(newIntern.getRole()).toBe('Title: intern')
});