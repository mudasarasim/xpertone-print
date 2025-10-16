const express = require('express');
const router = express.Router();
const db = require('../config/db'); // adjust according to your path (../config/db.js if in config folder)

// ✅ 1️⃣ Start new process
router.post('/start', async (req, res) => {
  try {
    const { order_id, customer_name, customer_phone } = req.body;

    if (!order_id || !customer_name || !customer_phone)
      return res.status(400).json({ success: false, message: 'Missing data' });

    await db.query(
  'INSERT INTO printing_process (order_id, customer_name, customer_phone, current_stage) VALUES (?, ?, ?, "Prepress")',
  [order_id, customer_name, customer_phone]
);


    res.json({ success: true, message: 'Process started at Prepress' });
  } catch (err) {
    console.error('Error starting process:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


// ✅ 2️⃣ Update process stage
router.put('/update/:order_id', async (req, res) => {
  try {
    const { stage, notes } = req.body;
    const { order_id } = req.params;

    const validStages = [
      'Prepress',
      'Printing',
      'Collating',
      'Binding',
      'Polywrap',
      'Shipping',
      'Completed'
    ];

    if (!validStages.includes(stage)) {
      return res.status(400).json({ success: false, message: 'Invalid stage' });
    }

    await db.query(
      'UPDATE printing_process SET current_stage = ?, notes = ? WHERE order_id = ?',
      [stage, notes || '', order_id]
    );

    res.json({ success: true, message: `Stage updated to ${stage}` });
  } catch (err) {
    console.error('Error updating process:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ 3️⃣ Get process by order
router.get('/:order_id', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM printing_process WHERE order_id = ?',
      [req.params.order_id]
    );
    res.json(rows[0] || {});
  } catch (err) {
    console.error('Error fetching process:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ✅ 4️⃣ Get all processes
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM printing_process ORDER BY id DESC');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching all processes:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
