const inquirer = require('inquirer');
const Logger = require('./src/Logger')
const fs = require('fs');
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
            if ((/^[a-zA-Z ]+$/g.test(name)) && name.length > 2) {
                return true;
            } else return 'A name cannot have numbers and longer than 2 characters'
        }
    },
    {
        type: 'input',
        message: 'Enter the team managers ID',
        name: 'id',
        validate: (id) => {
            if (/^\d+$/g.test(id)) {
                return true;
            } else return 'ID must be a number'
        }
    },
    {
        type: 'input',
        message: 'Enter the team managers email address',
        name: 'email',
        validate: (email) => {
            if (/^[\w-]+@[a-zA-Z]+.com$/g.test(email)) {
                return true;
            } else return 'email must be valid'
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
            if ((/^[a-zA-Z ]+$/g.test(name)) && name.length > 2) {
                return true;
            } else return 'A name cannot have numbers and longer than 2 characters'
        }
    },
    {
        type: 'input',
        message: 'Enter the engineers ID',
        name: 'id',
        validate: (id) => {
            if (/^\d+$/g.test(id)) {
                return true;
            } else return 'ID must be a number'
        }
    },
    {
        type: 'input',
        message: 'Enter the engineers email address',
        name: 'email',
        validate: (email) => {
            if (/^[\w-]+@[a-zA-Z]+.com$/g.test(email)) {
                return true;
            } else return 'email must be valid'
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
            if ((/^[a-zA-Z ]+$/g.test(name)) && name.length > 2) {
                return true;
            } else return 'A name cannot have numbers and longer than 2 characters'
        }
    },
    {
        type: 'input',
        message: 'Enter the interns ID',
        name: 'id',
        validate: (id) => {
            if (/^\d+$/g.test(id)) {
                return true;
            } else return 'ID must be a number'
        }
    },
    {
        type: 'input',
        message: 'Enter the interns email address',
        name: 'email',
        validate: (email) => {
            if (/^[\w-]+@[a-zA-Z]+.com$/g.test(email)) {
                return true;
            } else return 'email must be valid'
        }
    },
    {
        type: 'input',
        message: 'Enter the interns school',
        name: 'school'
    }
]







function start() {
    inquirer.prompt(welcomeMessage).then(start => {
        if (start.start == 'start building') {
            log.blue('start by entering the team managers details');
            managerPrompt();
        }
        else {
            log.red('----GOODBYE----')
        }

    })
}

function managerPrompt() {
    inquirer.prompt(managerQuestions).then(answers => {
        teamMembers.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum));
        log.green(`
        ---------------------------------------------------
        Manager ${answers.name} has been added to the team
        ---------------------------------------------------
        `)
        choicePrompt();
    })
}

function choicePrompt() {
    inquirer.prompt(addTeamMenu).then(choice => {
        switch (choice.choice) {
            case 'add engineer':
                engineerPrompt();
                break;
            case 'add intern':
                internPrompt();
                break;
            case 'finish building team':
                finishBuild(teamMembers);
                break;
        }
    })
}

function engineerPrompt() {
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

function internPrompt() {
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

function buildManager(data) {
    return `
    <div class="card my-5" style="width: 22rem;">
    <div class="card-header bg-info">
        <h5 class="card-title text-center">Name: ${data.name}</h5>
        <h5 class="card-title text-center">${data.getRole()}</h5>
    </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">Office Number: ${data.officeNum}</li>
            </ul>
        </div>
    </div>
    `
}

function buildIntern(data) {
    return `
    <div class="card my-5" style="width: 22rem;">
    <div class="card-header bg-info">
        <h5 class="card-title text-center">Name: ${data.name}</h5>
        <h5 class="card-title text-center">${data.getRole()}</h5>
    </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
    </div>
    `
}

function buildEngineer(data) {
    return `
    <div class="card my-5" style="width: 22rem;">
    <div class="card-header bg-info">
        <h5 class="card-title text-center">Name: ${data.name}</h5>
        <h5 class="card-title text-center">${data.getRole()}</h5>
    </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}">${data.github}</a></li>
            </ul>
        </div>
    </div>
    `
}

    



function finishBuild(data) {

    fs.appendFile('./dist/index.html', generateHTML(data), (err) =>
        err ? console.error(err) : console.log('Content Appended!'));


}

function generateHTML(data) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="../css/style.css">
        <title>Team Builder</title>
    </head>
    <body>
        <div class="dashboard jumbotron jumbotron-fluid row py-4 bg-danger">
        <div class="container text-center">
            <h1 class="display-2">Team Builder</h1>
        </div>
    </div>
    <div class="row justify-content-around" id="addCards" style="margin: 5vw 15vw 0 15vw;">  
`;


    for (let i = 0; i < data.length; i++) {
        if(data[i].getRole() == 'Manager'){
            html += buildManager(data[i]);
        }else if(data[i].getRole() == 'Engineer'){
            html += buildEngineer(data[i]);
        }else if(data[i].getRole() == 'Intern'){
            html += buildIntern(data[i])
        }
    }

    html += `</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
</body>`

return html;
}





start();