const express = require('express');
const router = express.Router();
const db = require('../config/db');
const multer = require('multer');
const path = require('path');

// ✅ Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ POST /api/products - Add Product
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, label, quantity_500, quantity_1000, category, dimensions } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!title || !label || !quantity_500 || !quantity_1000 || !category || !image) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const [result] = await db.query(
      'INSERT INTO products (title, label, image, quantity_500, quantity_1000, category, dimensions) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, label, image, quantity_500, quantity_1000, category, dimensions || null]
    );

    res.json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// ✅ GET /api/products - All Products
router.get('/', async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM products');
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// ✅ GET /api/products/:id - Single Product
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ GET /api/products/category/:label - Products by Label (slug-friendly)
router.get('/category/:label', async (req, res) => {
  try {
    const label = req.params.label.replace(/-/g, ' ').toLowerCase();
    const [products] = await db.query(
      'SELECT * FROM products WHERE LOWER(category) = ?',
      [label]
    );
    res.json(products);
  } catch (err) {
    console.error('Error fetching by category:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ PUT /api/products/:id - Update Product
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, label, quantity_500, quantity_1000, category, dimensions } = req.body;
    const image = req.file ? req.file.filename : null;
    const { id } = req.params;

    const fields = ['title = ?', 'label = ?', 'quantity_500 = ?', 'quantity_1000 = ?', 'category = ?', 'dimensions = ?'];
    const values = [title, label, quantity_500, quantity_1000, category, dimensions];

    if (image) {
      fields.push('image = ?');
      values.push(image);
    }

    values.push(id);

    const sql = `UPDATE products SET ${fields.join(', ')} WHERE id = ?`;
    await db.query(sql, values);

    res.json({ success: true, message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Update failed' });
  }
});

// ✅ DELETE /api/products/:id - Delete Product
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await db.query('DELETE FROM products WHERE id = ?', [id]);
    res.json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Delete failed' });
  }
});

module.exports = router;
