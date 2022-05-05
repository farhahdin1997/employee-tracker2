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
const Department = require('./department');
const Role = require('./role');
const Employee = require('./employee');
/*Loads environment variables from .env file */
require ("dotenv").config ();


