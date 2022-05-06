USE myCompanyEmployeeTracker;

INSERT INTO department (department_name)
VALUES ("Sales"), ("IT"), ("Marketing"), ("HR"), ("Administration");

INSERT INTO role (title, salary, department_id)
VALUES 
("Sales Lead", 30000, 1), ("Salesperson", 150000, 1),
("Software support", 20000, 2), ("Software Engineer", 70000, 2), 
("Marketing lead", 25000, 3), ("Marketing associate", 12000, 3),
("HR Lead", 34000,4), ("Admin Asistant", 14000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aisha", "Din", 1, 8), ("Kenny", "Chan", 2, 1), 
("Ashley", "Tidsale", 3, 8), ("Mandeep", "Patel", 4, 3),
("Kevin", "Hear", 5, 8), ("Rock", "Johson", 6, 5),
("Bob", "Marley", 7, 8), ("Sadaf", "Din", 8, null);

 