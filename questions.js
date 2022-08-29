// Call inquirer CLI to prompt for information

const inquirer = require('inquirer');
const express = require('express');

// Start asking questions

async function askQs() {

    // Create array of basic questions
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
]
var enteringData = true;
var newData = [];

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

    const newDept = await inquirer
    .prompt (routingQs)

    if (newDept.task === "View all departments"){
        console.log("View all departments!")
    } else if (newDept.task === "View all roles"){
        console.log("View all roles!")
    } else if (newDept.task === "View all employees"){
        console.log("View all employees!")
    } else if (newDept.task === "Add a department"){
        console.log("Add a department!")
    } else if (newDept.task === "Add a role"){
        console.log("Add a role!")
    } else if (newDept.task === "Add an employee"){
        console.log("Add an employee!")
    } else if (newDept.task === "Update an employee's role"){
        console.log("Update an employee's role!")
    } else return;
    }
 )
}