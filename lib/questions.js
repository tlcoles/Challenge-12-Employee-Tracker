// Call inquirer CLI to prompt for information

const inquirer = require('inquirer');
const express = require('express');
const db = require('../connection')

// Start asking questions

async function askQs() {

    // Create arrays of questions
    const roleQs = [
        {
            type: 'input', //! 
            name: 'id',
            message: 'Provide a role id. ',
            // Validate that entry is a number
            default: () => {},
            validate: function (id) {
                valid = /^\d+$/.test(id)
                if (valid) {
                return true;
                } else {
                    console.info(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role? ',
        },
        {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role? ',
        // Validate that entry is a number
        default: () => {},
            validate: function (id) {
                valid = /^\d+$/.test(id)
                    if (valid) {
                    return true;
                } else {
                    console.info(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'To which department ID does it belong? ',
            choices: [
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                '700'
            ],
            default: '100',
        },
    ];

    const deptQs = [
        {
            type: 'number',
            name: 'id',
            message: 'Provide a department id. ',
            // Validate that entry is a number
            default: () => {},
            validate: function (id) {
                // valid = /^\d+$/.test(id)
                if (true) {
                return true;
                } else {
                    console.info(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'deptName',
            message: 'What is the name of the department? ',
        },
    ];

    const employeeQs = [
        {
            type: 'input',
            name: 'id',
            message: 'Provide an employee id. ',
            // Validate that entry is a number
            default: () => {},
            validate: function (id) {
                valid = /^\d+$/.test(id)
                if (valid) {
                return true;
                } else {
                    console.info(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'fName',
            message: 'What is the first name of the person? ',
        },
        {
            type: 'input',
            name: 'lName',
            message: 'What is the last name of the person? ',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Provide the role id. ',
            // Validate that entry is a number
            default: () => {},
            validate: function (id) {
                valid = /^\d+$/.test(id)
                if (valid) {
                return true;
                } else {
                    console.info(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'mgrId',
            message: 'Provide the id of the manager. ',
            // Validate that entry is a number
            default: () => {},
            validate: function (id) {
                valid = /^\d+$/.test(id)
                if (valid) {
                return true;
                } else {
                    console.info(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        },
    ]

    // Create conditions under which the data can be entered
    var enteringData = true;
    var newData = [];

    // you are mixing a while loop with recursive function calls to askQs() and
    // unfortunately they are weirdly redundant (do they cause double prompts?)
    // i'd rather only use the functional pattern

    const tasks = [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit database'
    ]
    inquirer.prompt([
        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: tasks,
            default: tasks[0],
        }

    ]).then(data => {
        switch (data.task) {
            case 'View all departments':
                db.query('SELECT * FROM employees_db.department', function (err, results) {
                    console.table(results);
                askQs(); //! return to list of questions per example of https://github.com/JYoung7223/jy_backend_cms
                });
                break;
            case 'View all roles':
                db.query('SELECT * FROM employees_db.role', function (err, results) {
                    console.table(results);
                    askQs();
                });
                break;
            case 'View all employees':
                db.query('SELECT * FROM employees_db.employee', function (err, results) {
                    console.table(results);
                    askQs();
                });
                break;
            case 'Add a department':
                // code here
                    inquirer
                    .prompt(deptQs)
                    .then(function (deptAs) {
                        db.query("INSERT INTO employees_db.department (id, name) VALUES (?, ?)", [
                            deptAs.id,
                            deptAs.deptName
                        ], function (error) {
                        if (error) throw error;
                    })
                    // and then recurse 
                    askQs();
                    });   
                break;
            case 'Add a role':
                inquirer
                .prompt(roleQs)
                .then(function (roleAs) {
                    db.query("INSERT INTO employees_db.role SET ?", {
                    id: roleAs.id, 
                    title: roleAs.title, 
                    salary: roleAs.salary, 
                    department_id: roleAs.department_id
                    }, function (error) {
                    if (error) throw error;
                })
                // and then recurse
                askQs();
                });
                break;
            case 'Add an employee':
                inquirer
                .prompt(employeeQs)
                .then(function (employeeAs) {
                    db.query("INSERT INTO employees_db.employee SET ?", {
                    id: employeeAs.id, 
                    first_name: employeeAs.fName, 
                    last_name: employeeAs.lName, 
                    role_id: employeeAs.roleId, //! requires already identified roleId
                    manager_id: employeeAs.mgrId //! requires already identified mgrId for the above role
                    }, function (error) {
                    if (error) throw error;
                })
                // and then recurse
                askQs();
                });
            case 'Update an employee role':
                //! ask for information on employee and update employee record
                //! in the absence of query, display message in console
                console.info('\x1b[41m\x1b[37m', 'You have not implemented this yet, Tammi!','\x1b[0m');
                askQs();
                break;
            case 'Exit database':
                console.info("You have exited the DB. Press Control+C to exit Node!")
                break;
    }})
        return newData;
}

module.exports = askQs;