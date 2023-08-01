const mysql = require('mysql2');

// Creating database connection information
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '42uaqQ{.[Es?e%9',
    database: 'employee_tracker_db'
});


// Function to execute query and return a promise
function executeQuery(sql, values) {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

// Export
module.exports = db;
