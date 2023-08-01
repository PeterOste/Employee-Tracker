const mysql = require('mysql2');

// Creating database connection information
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '42uaqQ{.[Es?e%9',
    database: 'employee_tracker_db'
});

// Connecting to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('Connected to database');
});

// Export
module.exports = db;
