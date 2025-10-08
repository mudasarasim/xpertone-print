const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const db = require('../config/db'); // Your promise-based pool

// Ensure uploads folder exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// POST /api/orders
router.post('/', upload.fields([{ name: 'frontFile' }, { name: 'backFile' }]), async (req, res) => {
  try {
    const {
      product_title,
      quantity,
      circulation,
      series,
      total_price,
      customer_name,
      customer_email,
      customer_phone,
      customer_location,
    } = req.body;

    const frontFile = req.files?.frontFile?.[0]?.filename || '';
    const backFile = req.files?.backFile?.[0]?.filename || '';

    const conn = await db.getConnection();

    const sql = `
      INSERT INTO orders
      (product_title, quantity, circulation, series, total_price, front_file, back_file,
       customer_name, customer_email, customer_phone, customer_location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await conn.execute(sql, [
      product_title,
      quantity,
      circulation,
      series,
      total_price,
      frontFile,
      backFile,
      customer_name,
      customer_email,
      customer_phone,
      customer_location,
    ]);

    conn.release();

    res.status(200).json({
      message: 'Order placed successfully',
      orderId: result.insertId,
    });
  } catch (error) {
    console.error('❌ Order API error:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// GET all orders (admin panel)
router.get('/all', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM orders ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    console.error('❌ Failed to fetch orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
