USE company_db;

INSERT INTO departments(name)
VALUES('Marketing'),
('IT'),
('Legal');

INSERT INTO roles(title, salary, department_id)
VALUES('Marketing leader', 80000,00, 1),
('Support Analyst', 67893.50, 1),
('Support lead', 89372.64, 2),
('Senior support', 40678.51, 2),
('Legal Secretary', 10056.54, 3),
('Lawyer', 50345.45, 3);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES('Aisha', 'Din', 1, NULL),
('Zain', 'Bhikha', 2, 1),
('Bily', 'Manzoor', 2, 1),
('Carol', 'Smith', 3, NULL),
('Peter', 'Parker', 4, 4),
('Sara', 'Mill', 4, 4),
('Elliot', 'Toddle', 5, NULL),
('Bill', 'Hammersmith', 6, 7),
('Kenny', 'Pit', 6, 7);