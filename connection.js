const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'BOOTCAMP_2022!',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`));

module.exports = db;