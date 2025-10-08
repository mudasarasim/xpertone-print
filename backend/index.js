require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const contactRoutes = require('./routes/contact');
const adminOrderRoutes = require('./routes/admin/orders');
const adminAuthRoutes = require('./routes/adminAuth');
const safetyProductsRouter = require('./routes/safetyProducts');
const safetyOrderRoutes = require('./routes/safetyorder');
const profileRoutes = require('./routes/profile');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static('uploads')); // for image access

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/safety-products', safetyProductsRouter);
app.use('/api/safetyorder', safetyOrderRoutes);
app.use('/api/profile', profileRoutes);

// ✅ Serve frontend build (located outside backend folder)
const frontendPath = path.join(__dirname, '..', 'build');
app.use(express.static(frontendPath));

// ✅ Catch-all route (for React Router or SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// ✅ Start server on single port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server and frontend running on port ${PORT}`));
