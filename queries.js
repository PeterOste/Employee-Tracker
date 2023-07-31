const db = require('./db');

// Function to view all departments
async function viewAllDepartments() {
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
async function viewAllRows() {
    const [rows] = await db.query(`
        SELECT 
            id, 
            title, 
            salary, 
            department_id, 
        FROM 
            role
    `);
    return rows;
}

// Function to view all employees
// Used LEFT JOIN to make reading for comprehensive
async function viewAllEmployees() {
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
    const[result] = await db.query();
}

// Function to add new role
async function addRole(title, salary, departmentId) {
    const[result] = await db.query();
}

// Function to add new employee
async function addEmployee(firstName, lastName, roleId, managerId) {
    const[result] = await db.query();
}

module.exports = {
    viewAllDepartments,
    viewAllRows,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    
};