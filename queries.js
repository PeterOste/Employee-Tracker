const db = require('./db');

// Function to view all departments
async function viewDepartments() {
    const [rows] = await db.query(`
        SELECT 
            id, 
            name 
        FROM 
            department
    `);
    return rows;
}

// Function to view all rows
async function viewRoles() {
    const [rows] = await db.query(`
        SELECT 
            id, 
            title, 
            salary, 
            department_id 
        FROM 
            role
    `);
    return rows;
}

// Function to view all employees
// Used LEFT JOIN to make reading for comprehensive
async function viewEmployees() {
    const [rows] = await db.query(`
        SELECT
            employee.id,
            employee.first_name,
            employee.last_name,
            role.title AS job_title,
            department.name AS department,
            role.salary,
            CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM
            employee
            LEFT JOIN role ON employee.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee manager ON employee.manager_id = manager.id
    `);
    return rows;
}

// Function to add new department
async function addDepartment(departmentName) {
    const[result] = await db.query(`INSERT INTO department (name) VALUES (?)`, [departmentName]);
    return result.insertId;
}

// Function to add new role
async function addRole(title, salary, departmentId) {
    const[result] = await db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [title, salary, departmentId]);
    return result.insertId;
}

// Function to add new employee
async function addEmployee(firstName, lastName, roleId, managerId) {
    const[result] = await db.query(`Insert INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [firstName, lastName, roleId, managerId]);
    return result.insertId;
}

// Function to update current employee
async function updateEmployee(employeeId, newRoleId) {
    const[result] = await db.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [newRoleId, employeeId]);
    return result.affectedRows > 0;
}

// Exports
module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee
};