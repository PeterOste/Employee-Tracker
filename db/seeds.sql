-- Seeds for department table
INSERT INTO department (name) VALUES
    ('HR'),
    ('Engineering'),
    ('Finance'),
    ('Sales'),
    ('Marketing');

-- Seeds for role table
INSERT INTO role (title, salary, department_id) VALUES
    ('HR Manager', 70000, 1),
    ('Software Engineer', 90000, 2),
    ('Finance Specialist', 65000, 3),
    ('Software Scientist', 100000, 2),
    ('Sales Specialist', 65000, 4),
    ('Software Development Manager', 150000, 2);

-- Seeds for employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Johann', 'Müller', 1, NULL),
    ('Helen', 'Watts', 3, 1),
    ('Zachariah', 'Lyons', 2, 1),
    ('Ela', 'Hanna', 4, 1),
    ('Wade', 'Olson', 5, 1),
    ('Louise', 'Buchanan', 6, 2),
    ('Abdullah', 'Muhammad', 3, 6),
    ('Jenny', 'Campos', 2, 6);