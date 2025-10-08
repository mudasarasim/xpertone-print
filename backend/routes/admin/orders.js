// routes/admin/orders.js
const express = require('express');
const router = express.Router();
const db = require('../../config/db');

// GET /admin/orders
router.get('/', async (req, res) => {
  try {
    const conn = await db.getConnection();
    const [orders] = await conn.query('SELECT * FROM orders ORDER BY id DESC');
    conn.release();
    res.json(orders);
  } catch (err) {
    console.error('❌ Fetch orders error:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
