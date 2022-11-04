// Call inquirer CLI to prompt for information

const inquirer = require('inquirer');
const express = require('express');
const db = require('../connection')

// Start asking questions

async function askQs() {

    // Create arrays of questions
    const roleQs = [
        {
            type: 'input',
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

    let  tasks = [
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
            case 'Exit database':
                // code here
                return // no outer loop, so this will end
            case 'Add a department':
                // code here
                // and then recurse
                askQs()
        }
    })

    while (enteringData) {
        const queryDB = await inquirer 
        .prompt (
         {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: [
                'View all departments', 
                'View all roles', 
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee', 
                'Update an employee role',
                'Exit database'
            ],
            default: 'View all departments',
        },
    );
    if (queryDB.task === 'Exit database') {
        console.info("You have exited the DB. Press Control+C to exit Node!")
        break;

    // query DB for all departments and display
    }  else if (queryDB.task === "View all departments") {
        db.query('SELECT * FROM employees_db.department', function (err, results) {
            console.table(results);
            askQs(); //! return to list of questions per example of https://github.com/JYoung7223/jy_backend_cms
        });

          
    // query DB for all roles and display
    } else if (queryDB.task === "View all roles"){
        db.query('SELECT * FROM employees_db.role', function (err, results) {
            console.table(results);
            askQs();
        });

    // query DB for all employees and display
    } else if (queryDB.task === "View all employees"){
        db.query('SELECT * FROM employees_db.employee', function (err, results) {
            console.table(results);
            askQs();
        });

    // insert a new department in the database    
    } else if (queryDB.task === "Add a department"){
        await inquirer
            .prompt(deptQs)
            .then(function (deptAs) {
                db.query("INSERT INTO employees_db.department (id, name) VALUES (?, ?)", [
                    deptAs.id,
                    deptAs.deptName
                ], function (error) {
                if (error) throw error;
            })
            });

    // insert a new role in the database
    } else if (queryDB.task === "Add a role"){
        await inquirer
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
            });

    // insert an employee into the database
    } else if (queryDB.task === "Add an employee"){
        await inquirer
            .prompt(employeeQs)
            .then(function (employeeAs) {
                db.query("INSERT INTO employees_db.employee SET ?", {
                id: employeeAs.id, 
                first_name: employeeAs.fName, 
                last_name: employeeAs.lName, 
                role_id: employeeAs.roleId,
                manager_id: employeeAs.mgrId
                }, function (error) {
                if (error) throw error;
            })
            });
        
        //! ask for information and push responses to DB
    } else if (queryDB.task === "Update an employee's role"){
        console.info("Update an employee's role!")
        //! update a specific employee's role
    } else 
        console.info('You are here.');
    }
        return newData;
}

module.exports = askQs;