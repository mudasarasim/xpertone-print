const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const db = require('../config/db');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT id, username, email FROM users WHERE id = ?',
      [req.user.id]
    );

    if (rows.length === 0) return res.status(404).json({ message: 'User not found' });

    res.json({ user: rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
