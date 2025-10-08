// // routes/checkout.js
// const express = require('express');
// const router = express.Router();
// const db = require('../config/db');

// router.post('/place-order', (req, res) => {
//   const { customer_name, email, phone, items, subtotal, vat, total } = req.body;

//   if (!items || !Array.isArray(items) || items.length === 0) {
//     return res.status(400).json({ error: 'Cart is empty' });
//   }

//   const orderQuery = `
//     INSERT INTO checkout_orders (customer_name, email, phone, subtotal, vat, total) 
//     VALUES (?, ?, ?, ?, ?, ?)
//   `;

//   db.query(orderQuery, [customer_name, email, phone, subtotal, vat, total], (err, result) => {
//     if (err) {
//       console.error('Order insert error:', err);
//       return res.status(500).json({ error: 'Database error (order)' });
//     }

//     const orderId = result.insertId;

//     const itemQueries = items.map((item) => {
//       return new Promise((resolve, reject) => {
//         const itemQuery = `
//           INSERT INTO order_items 
//           (order_id, product_id, title, price, quantity, label, image, category, dimensions)
//           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
//         `;

//         db.query(itemQuery, [
//           orderId,
//           item.id,
//           item.title,
//           Number(item.quantity_500) || 0,
//           item.quantity,
//           item.label || '',
//           item.image || '',
//           item.category || '',
//           item.dimensions || '',
//         ], (err) => {
//           if (err) return reject(err);
//           resolve();
//         });
//       });
//     });

//     Promise.all(itemQueries)
//       .then(() => res.json({ success: true, orderId }))
//       .catch((err) => {
//         console.error('Item insert error:', err);
//         res.status(500).json({ error: 'Failed to insert order items' });
//       });
//   });
// });

// module.exports = router;
