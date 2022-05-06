CREATE DATABASE myCompanyEmployeeTracker;
use myCompanyEmployeeTracker;

CREATE TABLE employee (
id integer not null auto_increment,
first_name varchar(30),
last_name varchar(30),
role_id integer,
manager_id integer,
primary key (id)
);

CREATE TABLE department (
id integer not null auto_increment,
department_name varchar(30),
primary key (id)
);

CREATE TABLE role (
id integer not null auto_increment,
title varchar(30),
salary decimal (8,2),
department_id integer,
primary key (id)
);