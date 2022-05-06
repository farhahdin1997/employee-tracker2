/* Require -used for designing and building web applications quickly and easily*/

/*Adds console.table method that prints an array of objects as a table in console*/
require('console.table');
/*
Inquirer is an NPM package that provides an easy way to capture user input in your
 Node. js command line interface applications.*/
const inquirer = require('inquirer');
const mysql = require('mysql2');
/*Comma-Number - Format a number with commas or custom character */
const commaNumber = require('comma-number');
/*Bringing it department role and employee*/
// const Department = require('./department');
// const Role = require('./role');
// const Employee = require('./employee');
/*Loads environment variables from .env file */
require ("dotenv").config ();


/*Connecting to database sql */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL,
    database: 'myCompany_db'
}); 

/* Displays the welcome message but if the connection fails display error else go to the next part and run that function ini|(0*/
console.log('\n\nWelcome to the Employee Tracker\n\n===============================');
connection.connect(function (err){
    if (err)throw err 
});
options();

function options() {
    console.log('\n\n')
    inquirer.prompt([
        {
            type: 'list',
            name: 'init',
            message: 'What would you like to do?',
            choices: [
                'View Departments', 
                'View Roles', 
                'Add Department', 
                'Update Employee',
                'Add Role', 
                'Add Employee', 
                'Exit Employee Tracker'],
            // pageSize: 12
        }
    ]).then((answers) => {
        switch(answers.init) {
            case 'Exit Employee Tracker':
                connection.end();
                console.log('Goodbye');
                /* Once exited will display goodbye*/
                break;
                /* Will run the fucntions to allow them to work*/
            case 'Update Employee':
                updateEmployee();
                break;
            case 'Add Department':
                addDepartment();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'View Departments':
                viewDepartments();
                break;
            case 'View Roles':
                viewRoles();
                break;
            
        }
    })
}

/*Implementing the functions*/

/*Show all departments */

/*Selects the department name from the department table in the database, it show the table of departments if not shows error*/
function viewDepartments() {
    connection.query(`SELECT name AS 'Departments' FROM departments`, (err, res) => {
        if (err) throw err;
        console.log('\n\n')
        console.table(res);
        options();
    });
}

/*Show all roles */

/*Add employee*/

/*Update employee */

/*Add department*/