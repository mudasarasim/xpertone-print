// routes/contact.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await db.query(
      'INSERT INTO contact_messages (name, email, phone, message) VALUES (?, ?, ?, ?)',
      [name, email, phone, message]
    );
    
    // ✅ Send proper JSON response
    res.json({ success: true, message: 'Message saved successfully' });

  } catch (err) {
    console.error('❌ Error saving message:', err);
    res.status(500).json({ success: false, error: 'Database error' });
  }
});
// GET /api/contact/admin - fetch all messages
router.get('/admin', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM contact_messages ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('❌ Error fetching contact messages:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

module.exports = router;
