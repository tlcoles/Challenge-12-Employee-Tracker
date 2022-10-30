// Call inquirer CLI to prompt for information

const inquirer = require('inquirer');
const express = require('express');

// Start asking questions

async function askQs() {

    // Create array of routing questions
    const roleQs = [
        {
            type: 'list',
            name: 'department',
            message: 'Select the department that the role belongs to: ',
            choices: [
                'IT Systems', 
                'Sales', 
                'Finance',
                'Marketing',
                'Human Resources',
                'Legal', 
                'Facilities Management'
            ],
            default: 'IT Systems',
            // when: enteringData,
        },
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of the role?',
        // when: enteringData,
        },
        {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?',
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
        // when: enteringData,
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
    } else if (queryDB.task === "View all departments") {
        console.info("You tried to View all departments and failed!")
        //! query DB for all departments and display
    } else if (queryDB.task === "View all roles"){
        console.info("View all roles!")
        //! query DB for all roles and display
    } else if (queryDB.task === "View all employees"){
        console.info("View all employees!")
        //! query DB for all employees and display
    } else if (queryDB.task === "Add a department"){
        console.info("Add a department!")
        //! update a department
    } else if (queryDB.task === "Add a role"){
        console.info("Add a role!");
        //! update a role
        const addRole = await inquirer
        .prompt (roleQs)
        //! ask for information and push responses to DB
        console.info ("You tried to add a role and failed.")        
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