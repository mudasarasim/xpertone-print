const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

// Ensure uploads folder exists
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });


const sendEmail = require('../config/mailer'); // Import mailer at top

router.post('/', authMiddleware, upload.fields([{ name: 'frontFile' }, { name: 'backFile' }]), async (req, res) => {
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
      (user_id, product_title, quantity, circulation, series, total_price,
       front_file, back_file, customer_name, customer_email, customer_phone, customer_location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await conn.execute(sql, [
      req.user.id,
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
const orderId = result.insertId; // ✅ define orderId

    // Auto start printing process tracking
    await db.query(
      'INSERT INTO printing_process (order_id, customer_name, customer_phone, current_stage) VALUES (?, ?, ?, "Prepress")',
      [result.insertId, customer_name, customer_phone]
    );

    conn.release();

    // ✅ Send email to admin
    const emailHTML = `
      <h2>New Order Placed - Order #${orderId}</h2>
      <p><b>Order ID:</b> ${orderId}</p>
      <p><strong>Customer Name:</strong> ${customer_name}</p>
      <p><strong>Email:</strong> ${customer_email}</p>
      <p><strong>Phone:</strong> ${customer_phone}</p>
      <p><strong>Location:</strong> ${customer_location}</p>
      <hr>
      <p><strong>Product Title:</strong> ${product_title}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Circulation:</strong> ${circulation}</p>
      <p><strong>Series:</strong> ${series}</p>
      <p><strong>Total Price:</strong> ${total_price}</p>
      <p><strong>Front File:</strong> ${frontFile}</p>
      <p><strong>Back File:</strong> ${backFile}</p>
    `;

    await sendEmail('khubaibbintariq544@gmail.com', 'New Order Placed', emailHTML);

    res.status(200).json({
      message: 'Order placed successfully and email sent ✅',
      orderId: result.insertId,
    });
  } catch (error) {
    console.error('❌ Order API error:', error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// ✅ Fetch orders for logged-in user
router.get('/my-orders', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(rows);
  } catch (error) {
    console.error('❌ Failed to fetch user orders:', error);
    res.status(500).json({ error: 'Failed to fetch user orders' });
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
