const express = require('express');
const router = express.Router();
const db = require('../config/db'); 
const sendEmail = require('../config/mailer');

// POST /api/safetyorder
router.post('/', async (req, res) => {
  const { customer_name, customer_email, customer_phone, delivery_location, products } = req.body;

  if (!products || products.length === 0) {
    return res.status(400).json({ message: 'No products selected' });
  }

  try {
    let emailContent = `<h2>New Safety Order Placed</h2>
                        <p><strong>Customer Name:</strong> ${customer_name}</p>
                        <p><strong>Email:</strong> ${customer_email}</p>
                        <p><strong>Phone:</strong> ${customer_phone}</p>
                        <p><strong>Delivery Location:</strong> ${delivery_location}</p>
                        <hr>`;

    for (const item of products) {
      const S = item.sizeQuantities?.S || 0;
      const M = item.sizeQuantities?.M || 0;
      const L = item.sizeQuantities?.L || 0;
      const XL = item.sizeQuantities?.XL || 0;

      const price = item.price || 0;
      const total_price = (S + M + L + XL) * price;

      // Insert into safety_orders
      const [orderResult] = await db.execute(
        `INSERT INTO safety_orders
         (customer_name, customer_email, customer_phone, delivery_location, product_title, small_qty, medium_qty, large_qty, xl_qty, total_price)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [customer_name, customer_email, customer_phone, delivery_location, item.title, S, M, L, XL, total_price]
      );

      const orderId = orderResult.insertId;

      // Insert into tracking
      await db.execute(
        `INSERT INTO printing_process (order_id, customer_name, customer_phone, current_stage)
         VALUES (?, ?, ?, 'Prepress')`,
        [orderId, customer_name, customer_phone]
      );

      emailContent += `
        <p><strong>Product:</strong> ${item.title}</p>
        <p>S: ${S} | M: ${M} | L: ${L} | XL: ${XL}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Total:</strong> ${total_price}</p>
        <hr>
      `;
    }

    // Send email to admin
    await sendEmail('khubaibbintariq544@gmail.com', 'New Safety Order Placed - Order #${orderId}', emailContent);

    res.json({ message: 'Order placed successfully, added to tracking, and email sent ✅' });
  } catch (err) {
    console.error('Order API error:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
});
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