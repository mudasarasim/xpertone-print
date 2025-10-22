require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();

// ✅ Allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://175.41.162.115',
  'http://175.41.162.115:5000',
  'http://xpertoneprints.com',
  'http://xpertoneprints.com:5000',
  'https://xpertoneprints.com',
];

// ✅ CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman/mobile apps
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.warn(`❌ CORS Blocked Origin: ${origin}`);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static('uploads'));

// ✅ Routes Imports
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

// ✅ Register API Routes
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

// ✅ Free & CORS-friendly IP lookup (no API key needed)
app.get('/api/ipinfo', async (req, res) => {
  try {
    const response = await axios.get('https://ipwho.is/');
    res.json(response.data);
  } catch (error) {
    console.error('❌ Failed to fetch IP info:', error.message);
    res.status(500).json({ error: 'Failed to fetch IP info' });
  }
});

// ✅ Serve React Frontend (build folder)
const frontendPath = path.join(__dirname, '..', 'build');
app.use(express.static(frontendPath));

// ✅ Handle React Router (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
