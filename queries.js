const db = require('./db');

// Function to view all departments
async function viewAllDepartments() {
    const [rows] = await db.query('SELECT id, name FROM department');
    return rows;
}

// Function to view all rows
async function viewAllRows() {
    const [rows] = await db.query('SELECT id, title, salary, department_id, FROM role');
    return rows;
}