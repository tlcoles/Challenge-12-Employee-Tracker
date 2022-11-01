// Call inquirer CLI to prompt for information

const inquirer = require('inquirer');
const express = require('express');
const db = require('../connection')

// Start asking questions

async function askQs() {

    // Create array of routing questions
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

    // Create conditions under which the data can be entered
    var enteringData = true;
    var newData = [];

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
        console.info("You have exited the DB. Press control+C!")
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
        db.query("INSERT INTO employees_db.department (`id`, `name`) VALUES ('800', 'Quality Standards')")

    //! update a department
    } else if (queryDB.task === "Add a role"){
        await inquirer
            .prompt(roleQs)
            .then(function (answers) {
                db.query("INSERT INTO employees_db.role SET ?", {
                id: answers.id, 
                title: answers.title, 
                salary: answers.salary, 
                department_id: answers.department_id
                }, function (error) {
                if (error) throw error;
            })
            });
            askQs();
    } else if (queryDB.task === "Add an employee"){
        console.info("Add an employee!")
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