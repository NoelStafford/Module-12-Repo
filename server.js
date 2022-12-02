const mysql = require('mysql');
const inquirer = reuqire('inquirer');
const { response } = reuqire('express');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connection to the database
const db = mysql.createConnection(
    {
        // the host
        host: 'localhost',
        // mysql username and password that we made in class
        user: 'root',
        password: 'rootroot',
        database: 'employee_db',

        port: 3306
    }
);
// questions to ask the user
const questions = [{
    type: 'list',
    name: 'options',
    message: 'Please selecet an option before continuing.',
    choices: ['Add Employee', 'Add Department', 'Add Role', 'View All Departments', 'View All Employess', 'View All Roles'],
}];
// view all employees
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeechoices = employees.map( ({id, firstName, lastName}) => ({
                name: `${firstName} ${lastName}`,
                value: id
            })
        )});
        prompt([
            {
                name: 'employees',
                type: 'list',
                message: 'Please choose an employee',
                choices: employeechoices
            }
        ])
}
// view all departments
function viewDepartments() {
    db.query("SELECT * FROM department", function (err, result) {
        begin()
    })
}
// view all roles
function viewRoles() {
    db.query("SELECT * FROM role", function (err, result) {
        begin()
    })
}
// need to make the function to call all of these
function begin() {
    inquirer.prompt(startScreen).then((res) => {
        switch (res.menu) {
            case "Add Department":
                begin();
                break;

            case "View all departments":
                db.query(departments, function (err, response) {
                    begin();
                });
                break;
                case "View all Roles":
                db.query(viewEmployees, function (err, response) {
                    begin();
                });
                
        }
    })
}