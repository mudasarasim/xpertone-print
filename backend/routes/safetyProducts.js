const express = require('express');
const router = express.Router();
const db = require('../config/db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ✅ Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, './uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// ✅ Allowed safety categories
const safetyCategories = ['Safety vest', 'Cargo Trousers', 'Pant-Shirts-Coveralls'];

// ------------------ ADD SAFETY PRODUCT ------------------
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, label, category, size, price } = req.body;

    if (!title || !label || !category || !size || !price) {
      return res.status(400).json({ success: false, message: 'Title, label, category, size, and price are required' });
    }

    if (!safetyCategories.includes(category)) {
      return res.status(400).json({ success: false, message: 'Invalid safety category' });
    }

    const image = req.file ? req.file.filename : null;
    if (!image) {
      return res.status(400).json({ success: false, message: 'Image is required' });
    }

    // Ensure size is always an array
    let sizeArray;
    try {
      sizeArray = JSON.parse(size);
      if (!Array.isArray(sizeArray)) sizeArray = [sizeArray];
    } catch {
      sizeArray = [size];
    }

    // ✅ Insert into safety_products table with price
    const query = `
      INSERT INTO safety_products (title, label, image, category, size, price)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await db.query(query, [
      title,
      label,
      image,
      category,
      JSON.stringify(sizeArray),
      parseFloat(price),
    ]);

    res.json({ success: true, message: 'Safety product added successfully' });
  } catch (err) {
    console.error('Error adding safety product:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ------------------ GET ALL SAFETY PRODUCTS ------------------
router.get('/', async (req, res) => {
  try {
    const [products] = await db.query(`SELECT * FROM safety_products ORDER BY id DESC`);
    res.json(products);
  } catch (err) {
    console.error('Error fetching safety products:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET safety products by category
router.get('/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const [products] = await db.query(
      'SELECT * FROM safety_products WHERE category = ? ORDER BY id DESC',
      [category]
    );
    res.json(products);
  } catch (err) {
    console.error('Error fetching safety products by category:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ------------------ UPDATE SAFETY PRODUCT ------------------
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, label, category, size, price } = req.body;

    if (!title || !label || !category || !size || !price) {
      return res.status(400).json({ success: false, message: 'Title, label, category, size, and price are required' });
    }

    if (!safetyCategories.includes(category)) {
      return res.status(400).json({ success: false, message: 'Invalid safety category' });
    }

    // Parse sizes safely
    let sizeArray;
    try {
      sizeArray = JSON.parse(size);
      if (!Array.isArray(sizeArray)) sizeArray = [sizeArray];
    } catch {
      sizeArray = [size];
    }

    // Get existing product to check current image
    const [existingRows] = await db.query('SELECT * FROM safety_products WHERE id = ?', [id]);
    if (existingRows.length === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    const existingProduct = existingRows[0];

    const image = req.file ? req.file.filename : existingProduct.image;

    const query = `
      UPDATE safety_products 
      SET title = ?, label = ?, category = ?, size = ?, image = ?, price = ? 
      WHERE id = ?
    `;
    await db.query(query, [
      title,
      label,
      category,
      JSON.stringify(sizeArray),
      image,
      parseFloat(price),
      id,
    ]);

    res.json({ success: true, message: 'Safety product updated successfully' });
  } catch (err) {
    console.error('Error updating safety product:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ------------------ DELETE SAFETY PRODUCT ------------------
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [existingRows] = await db.query('SELECT * FROM safety_products WHERE id = ?', [id]);
    if (existingRows.length === 0) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    const product = existingRows[0];

    if (product.image) {
      const imagePath = path.join(__dirname, '../uploads', product.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Failed to delete image file:', err);
      });
    }

    await db.query('DELETE FROM safety_products WHERE id = ?', [id]);
    res.json({ success: true, message: 'Safety product deleted successfully' });
  } catch (err) {
    console.error('Error deleting safety product:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET safety product by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM safety_products WHERE id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('Error fetching product by id:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
