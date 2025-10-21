require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// ✅ Allowed origins (adjust these for your actual frontend URLs)
const allowedOrigins = [
  'http://localhost:3000',       // local dev
  'http://175.41.162.115:5000',  // deployed frontend with port
  'http://175.41.162.115',       // deployed frontend without port
  'http://xpertoneprints.com:5000',       // optional - your custom domain (if any)
  'http://xpertoneprints.com',       // optional - your custom domain (if any)
  'https://xpertoneprints.com',       // optional - your custom domain (if any)
];

// ✅ CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow mobile apps/postman
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

// ✅ Middleware for JSON and uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static('uploads')); // serve image uploads

// ✅ Import routes
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
// const checkoutOrderRoutes = require('./routes/checkoutOrders'); // optional

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/checkout', checkoutOrderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/safety-products', safetyProductsRouter);
app.use('/api/safetyorder', safetyOrderRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/process', processFlowRoutes);

// ✅ Serve frontend (React build)
const frontendPath = path.join(__dirname, '..', 'build');
app.use(express.static(frontendPath));

// ✅ Handle React Router routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running in production on port ${PORT}`));
