const mysql = require('mysql2/promise');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('./env');


const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const connectToDatabase = async () => {
    try {
        const [rows, fields] = await pool.query('SELECT 1 + 1 AS result');
        console.log('Connected to the database:', rows[0].result);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
};

connectToDatabase();

module.exports = pool;
