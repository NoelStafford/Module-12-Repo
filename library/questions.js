const startScreen = [
    {
        name: 'start screen',
        tpye: 'list',
        message: 'Please choose from the options listed.',
        choices: ['Add new role', 'Add new employee', 'Add new department', 'View all employees', 'View all departments', 'View all roles', 'Quit']
    }
];
// adds a role 
function newRole() {
    return [
        {
            name: 'title',
            type: 'input',
            message: 'What role would you like to add'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Please insert the salary of the role'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Please choose a department to assign the new role to',
            // need to set up this array properly
            choices: [departments]
        }
    ]
};
// adds a new employee
function newEmployee() {
    return [
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the new employees first name?'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the new employees last name?'
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is the role of this employee?',
            // figure out what to add for choices array
            choices: roles
        }
    ]
};
// adds a new department
function newDepartment() {
    return [
        {
            name: 'name',
            type: 'input',
            message: 'Please enter a new department'
        }
    ]
};
