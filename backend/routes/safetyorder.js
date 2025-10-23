const express = require('express');
const router = express.Router();
const db = require('../config/db');
const sendEmail = require('../config/mailer');
const multer = require('multer');
const path = require('path');

// ✅ Multer setup for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // save uploaded files in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  },
});

const upload = multer({ storage }); // ✅ define 'upload' here

// ✅ POST /api/safetyorder
router.post('/', upload.single('image'), async (req, res) => {
  try {
    let { customer_name, customer_email, customer_phone, delivery_location, products } = req.body;

    // ✅ Parse products if JSON string
    if (typeof products === 'string') {
      try {
        products = JSON.parse(products);
      } catch (err) {
        return res.status(400).json({ message: 'Invalid products format' });
      }
    }

    if (!products || products.length === 0) {
      return res.status(400).json({ message: 'No products selected' });
    }

    // ✅ Uploaded design image
    const design_image = req.file ? req.file.filename : null;

    let emailContent = `
      <h2>New Safety Order Placed</h2>
      <p><strong>Customer Name:</strong> ${customer_name}</p>
      <p><strong>Email:</strong> ${customer_email}</p>
      <p><strong>Phone:</strong> ${customer_phone}</p>
      <p><strong>Delivery Location:</strong> ${delivery_location}</p>
      ${
        design_image
          ? `<p><strong>Design Image:</strong></p><img src="https://xpertoneprints.com/backend/uploads/${design_image}" width="150"/>`
          : ''
      }
      <hr>
    `;

    let lastOrderId = null;

    for (const item of products) {
      const S = item.sizeQuantities?.S || 0;
      const M = item.sizeQuantities?.M || 0;
      const L = item.sizeQuantities?.L || 0;
      const XL = item.sizeQuantities?.XL || 0;

      const price = item.price || 0;
      const total_price = (S + M + L + XL) * price;
      const product_image = item.image || null;

      // ✅ Insert order including design_image column
      const [orderResult] = await db.execute(
        `INSERT INTO safety_orders 
         (customer_name, customer_email, customer_phone, delivery_location, product_title, product_image, small_qty, medium_qty, large_qty, xl_qty, total_price, design_image)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          customer_name,
          customer_email,
          customer_phone,
          delivery_location,
          item.title,
          product_image,
          S,
          M,
          L,
          XL,
          total_price,
          design_image, // ✅ new column value
        ]
      );

      lastOrderId = orderResult.insertId;

      // ✅ Add to printing_process
      await db.execute(
        `INSERT INTO printing_process (order_id, customer_name, customer_phone, current_stage)
         VALUES (?, ?, ?, 'Prepress')`,
        [lastOrderId, customer_name, customer_phone]
      );

      emailContent += `
        <p><strong>Product:</strong> ${item.title}</p>
        ${
          product_image
            ? `<img src="https://xpertoneprints.com/backend/uploads/${product_image}" width="100" />`
            : ''
        }
        <p>S: ${S} | M: ${M} | L: ${L} | XL: ${XL}</p>
        <p><strong>Price:</strong> AED ${price}</p>
        <p><strong>Total:</strong> AED ${total_price}</p>
        <hr>
      `;
    }

    // ✅ Send email
    await sendEmail(
      'khubaibbintariq544@gmail.com',
      `New Safety Order Placed - Order #${lastOrderId}`,
      emailContent
    );

    res.json({
      message: '✅ Order placed successfully, added to tracking, and email sent!',
    });
  } catch (err) {
    console.error('Order API error:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

// ✅ GET all safety orders
router.get('/', async (req, res) => {
  try {
    const [orders] = await db.query('SELECT * FROM safety_orders ORDER BY id DESC');
    res.json(orders);
  } catch (err) {
    console.error('Fetch safety orders error:', err);
    res.status(500).json({ message: 'Failed to fetch safety orders' });
  }
});

module.exports = router;