const fs = require('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
]