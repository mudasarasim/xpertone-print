const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'printing_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Test MySQL connection once when server starts
(async () => {
  try {
    const conn = await db.getConnection();
    console.log('✅ Connected to MySQL (printing_database)');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
  }
})();

module.exports = db;
