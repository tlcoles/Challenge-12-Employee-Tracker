// Call inquirer CLI to prompt for information

const inquirer = require('inquirer');
const express = require('express');

// Start asking questions

async function askQs() {

    // Create array of routing questions
    const routingQs = [
        {
        type: 'input',
        name: 'enter_department',
        message: 'What is the name of the department?',
        when: enteringData,
        },
        {
        type: 'input',
        name: 'role_name',
        message: 'What is the name of the role?',
        when: enteringData,
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
                    console.log(" is invalid.  Please enter a valid number.")
                    return false;
                }
            },
        when: enteringData,
        },
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
        when: enteringData,
        },
    ];

    // Create conditions under which the data can be entered
    var enteringData = true;
    var newData = [];

    // inquirer
    //     .prompt(routingQs)
    //     .then((routingAs) => {
    //         console.log('you are here')
    //     })

    while (enteringData) {
        const useOrNot = await inquirer 
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
    if (useOrNot.task === 'Exit database') {
        break;
    }

    // If not exiting, select task route
    const chooseRoute = await inquirer
    .prompt(routingQs)

    // Once route selected, do the following
    .then(( 
        if (chooseRoute.task === "View all departments") {
            console.log("View all departments!")
        } else if (chooseRoute.task === "View all roles"){
            console.log("View all roles!")
        } else if (chooseRoute.task === "View all employees"){
            console.log("View all employees!")
        } else if (chooseRoute.task === "Add a department"){
            console.log("Add a department!")
        } else if (chooseRoute.task === "Add a role"){
            console.log("Add a role!")
        } else if (chooseRoute.task === "Add an employee"){
            console.log("Add an employee!")
        } else if (chooseRoute.task === "Update an employee's role"){
            console.log("Update an employee's role!")
        } else return; 
    ) => {
        console.log('You are here.'));
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Your console environment is not supported!")
          } else {
            console.log(error)
          }
    })
    
 )
};

module.exports = askQs;