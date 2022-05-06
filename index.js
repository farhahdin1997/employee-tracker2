
/*Dependancies*/

/*Brings in mysql2*/
const mysql = require("mysql");
// Inquirer is an NPM package that provides an easy way to capture user input in your
//  Node. js command line interface applications.*/
const inquirer = require("inquirer");
// /*Adds console.table method that prints an array of objects as a table in console*/
const consoleTable = require("console.table");


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