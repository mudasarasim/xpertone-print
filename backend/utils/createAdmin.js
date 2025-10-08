const bcrypt = require('bcrypt');
const db = require('../config/db');

(async () => {
  const email = 'admin@example.com';
  const plainPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const sql = 'INSERT INTO admin_users (email, password) VALUES (?, ?)';
  const [result] = await db.execute(sql, [email, hashedPassword]);

  console.log('✅ Admin user created with ID:', result.insertId);
  process.exit();
})();
