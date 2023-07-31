const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '42uaqQ{.[Es?e%9',
    database: '' // insert database name here
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('Connected to database');
});

mopdule.exports = db;
