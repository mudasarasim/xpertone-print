const express = require('express');
const router = express.Router();
const db = require('../config/db'); // MySQL pool

// POST /api/safetyorder
router.post('/', async (req, res) => {
  const { customer_name, customer_email, customer_phone, delivery_location, products } = req.body;

  if (!products || products.length === 0) {
    return res.status(400).json({ message: 'No products selected' });
  }

  try {
    for (const item of products) {
      // Prepare quantities for each size (default to 0)
      const S = item.sizeQuantities?.S || 0;
      const M = item.sizeQuantities?.M || 0;
      const L = item.sizeQuantities?.L || 0;
      const XL = item.sizeQuantities?.XL || 0;

      // Calculate total price per product
      const price = item.price || 0;
      const total_price = (S + M + L + XL) * price;

      // Insert into DB including total_price
      await db.execute(
        `INSERT INTO safety_orders
        (customer_name, customer_email, customer_phone, delivery_location, product_title, small_qty, medium_qty, large_qty, xl_qty, total_price)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [customer_name, customer_email, customer_phone, delivery_location, item.title, S, M, L, XL, total_price]
      );
    }

    res.json({ message: 'Order placed successfully' });
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
