require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

/* --------------------------------------------
   ✅ Middleware for Body Parsing
-------------------------------------------- */
app.use(express.json({ limit: '50mb' })); // Increase JSON size limit if necessary
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

/* --------------------------------------------
   ✅ Route Imports
-------------------------------------------- */
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const contactRoutes = require('./routes/contact');
const adminOrderRoutes = require('./routes/admin/orders');
const adminAuthRoutes = require('./routes/adminAuth');
const safetyProductsRouter = require('./routes/safetyProducts');
const safetyOrderRoutes = require('./routes/safetyorder');
const profileRoutes = require('./routes/profile');
const processFlowRoutes = require('./routes/processFlow');

/* --------------------------------------------
   ✅ Register API Routes
-------------------------------------------- */
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/safety-products', safetyProductsRouter);
app.use('/api/safetyorder', safetyOrderRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/process', processFlowRoutes);

/* --------------------------------------------
   ✅ IP Info Route (Fixed for CORS)
-------------------------------------------- */
app.get('/api/ipinfo', async (req, res) => {
  try {
    // Use ipwho.is API to fetch IP info
    const response = await axios.get('https://ipwho.is/');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Failed to fetch IP info:', error.message);
    res.status(500).json({ error: 'Failed to fetch IP info' });
  }
});

/* --------------------------------------------
   ✅ Serve React Frontend (build folder)
-------------------------------------------- */
const frontendPath = path.join(__dirname, '..', 'build'); // React build folder
app.use(express.static(frontendPath));

/* --------------------------------------------
   ✅ Handle React Router (SPA)
-------------------------------------------- */
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

/* --------------------------------------------
   ✅ Start Server
-------------------------------------------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
