const mysql = require('mysql');
const inquirer = reuqire('inquirer');
const { response } = reuqire('express');
// connection to the database
const db = mysql.createConnection(
    {
        // the host
        host: 'localhost',
        // mysql username and password that we made in class
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    }
);
// questions to ask the user
const questions = [{
    type: 'list',
    name: 'options',
    message: 'Please selecet an option before continuing.',
    choices: ['Add Employee', 'Add Department', 'Add Role', 'View All Departments', 'View All Employess', 'View All Roles'],

}]
// add new employee
function addEmployee() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'firstName'
        },
        {
            type: 'input',
            name: 'lastName'
        }
    ]).then(response => {
        db.query("INSERT INTO employee", function (err, result) {
            if (err) throw err
            console.table(result)
            init()
        })
    })
}
// add new department
function addDepartment() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name'
        }
    ]).then(response => {
        db.query("INSERT INTO department", function (err, result) {
            if (err) throw err
            console.table(result)
            init()
        })
    })
}
// add new role
function addRole () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name'
        },
        {
            type: 'input',
            name: 'title'
        },
        {
            type: 'input',
            name: 'salary'
        }
    ]).then(response => {
        db.query("INSERT INTO role", function (err, result) {
            if (err) throw err
            console.table(result)
            init()
        })
    })
}