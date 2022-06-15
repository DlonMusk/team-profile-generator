let inquirer = require('inquirer');
let Logger = require('./src/Logger')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let log = new Logger();

let teamMembers = [];

let welcomeMessage = {
    type: 'list',
    message: 'Hello and welcome to the team builder app',
    choices: ['start building', 'not today'],
    name: 'start'
}

let managerQuestions = [
    {
        type: 'input',
        message: 'Enter the team managers name',
        name: 'name',
        validate: (name) => {
            if((/^[a-zA-Z ]+$/g.test(name)) && name.length > 2){
                return true;
            }else return 'A name cannot have numbers and longer than 2 characters'
        }
    },
    {
        type: 'input',
        message: 'Enter the team managers ID',
        name: 'id',
        validate: (id) => {
            if(/^\d+$/g.test(id)){
                return true;
            }else return 'ID must be a number'
        }
    },
    {
        type: 'input',
        message: 'Enter the team managers email address',
        name: 'email',
        validate: (email) => {
            if(/^[\w-]+@[a-zA-Z]+.com$/g.test(email)){
                return true;
            }else return 'email must be valid'
        }
    },
    {
        type: 'input',
        message: 'Enter the team managers office number',
        name: 'officeNum'
    }
]

let addTeamMenu = {
    type: 'list',
    message: 'choose from the following options',
    choices: ['add engineer', 'add intern', 'finish building team'],
    name: 'choice'
}

let engineerQuestions = [
    {
        type: 'input',
        message: 'Enter the engineers name',
        name: 'name',
        validate: (name) => {
            if((/^[a-zA-Z ]+$/g.test(name)) && name.length > 2){
                return true;
            }else return 'A name cannot have numbers and longer than 2 characters'
        }
    },
    {
        type: 'input',
        message: 'Enter the engineers ID',
        name: 'id',
        validate: (id) => {
            if(/^\d+$/g.test(id)){
                return true;
            }else return 'ID must be a number'
        }
    },
    {
        type: 'input',
        message: 'Enter the engineers email address',
        name: 'email',
        validate: (email) => {
            if(/^[\w-]+@[a-zA-Z]+.com$/g.test(email)){
                return true;
            }else return 'email must be valid'
        }
    },
    {
        type: 'input',
        message: 'Enter the engineers github',
        name: 'github'
    }
]

let internQuestions = [
    {
        type: 'input',
        message: 'Enter the interns name',
        name: 'name',
        validate: (name) => {
            if((/^[a-zA-Z ]+$/g.test(name)) && name.length > 2){
                return true;
            }else return 'A name cannot have numbers and longer than 2 characters'
        }
    },
    {
        type: 'input',
        message: 'Enter the interns ID',
        name: 'id',
        validate: (id) => {
            if(/^\d+$/g.test(id)){
                return true;
            }else return 'ID must be a number'
        }
    },
    {
        type: 'input',
        message: 'Enter the interns email address',
        name: 'email',
        validate: (email) => {
            if(/^[\w-]+@[a-zA-Z]+.com$/g.test(email)){
                return true;
            }else return 'email must be valid'
        }
    },
    {
        type: 'input',
        message: 'Enter the interns school',
        name: 'school'
    }
]







function start(){
    inquirer.prompt(welcomeMessage).then(start => {
        if(start.start == 'start building'){
            log.blue('start by entering the team managers details');
            managerPrompt();
        }
        else {
            log.red('----GOODBYE----')
        }
        
    })
}

function managerPrompt(){
    inquirer.prompt(managerQuestions).then(answers => {
        teamMembers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum));
        choicePrompt();
    })
}

function choicePrompt(){
    inquirer.prompt(addTeamMenu).then(choice => {
        switch(choice.choice){
            case 'add engineer':
                engineerPrompt();
                break;
            case 'add intern':
                internPrompt();
                break;
            case 'finish building team':
                finishBuild();
                break;
        }
    })
}

function engineerPrompt(){
    inquirer.prompt(engineerQuestions).then(answers => {
        teamMembers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        log.green(`
        ---------------------------------------------------
        Engineer ${answers.name} has been added to the team
        ---------------------------------------------------
        `)
        choicePrompt();
    })
}

function internPrompt(){
    inquirer.prompt(internQuestions).then(answers => {
        teamMembers.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        log.green(`
        ---------------------------------------------------
        Intern ${answers.name} has been added to the team
        ---------------------------------------------------
        `)
        choicePrompt();
    })
}

function finishBuild(){
    console.log(teamMembers);
}

let jeff = new Employee('jeff', '10', 'erh@hml.cs');
let stan = new Manager('stan', '22', 'ahfd@.ca', '3');

log.green(stan.getRole())

start();