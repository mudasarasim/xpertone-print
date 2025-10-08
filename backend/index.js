require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products'); // ✅ Add this line
const orderRoutes = require('./routes/orders');
const contactRoutes = require('./routes/contact');
const adminOrderRoutes = require('./routes/admin/orders');
const adminAuthRoutes = require('./routes/adminAuth');
const safetyProductsRouter = require('./routes/safetyProducts');
const safetyOrderRoutes = require('./routes/safetyorder');
const profileRoutes = require('./routes/profile');


// const checkoutOrderRoutes = require('./routes/checkoutOrders');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // ✅ For image serving
// To handle large file uploads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));



app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // ✅ Add this line
app.use('/api/orders', orderRoutes);
// app.use('/api/checkout', checkoutOrderRoutes); // ✅ NEW
app.use('/api/contact', contactRoutes);
app.use('/api/admin/orders', adminOrderRoutes);
app.use('/api/admin', adminAuthRoutes);
app.use('/api/safety-products', safetyProductsRouter);
app.use('/api/safetyorder', safetyOrderRoutes);
app.use('/api/profile', profileRoutes);


app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
