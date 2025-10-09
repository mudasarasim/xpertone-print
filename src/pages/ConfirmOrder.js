import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config';

const ConfirmOrder = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Customer details states
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');

  if (!state)
    return <div className="container py-5">No order data provided.</div>;

  const {
    product,
    quantity,
    circulation,
    series,
    totalPrice,
    frontFile,
    backFile,
  } = state;

  const handleSubmit = async () => {
  if (!frontFile || !backFile) return alert('Both files are required');
  if (!customerName || !customerEmail || !customerPhone || !customerLocation)
    return alert('Please fill all customer details');

  const formData = new FormData();
  formData.append('product_title', product.title);
  formData.append('quantity', quantity);
  formData.append('circulation', circulation);
  formData.append('series', series);
  formData.append('total_price', totalPrice);
  formData.append('frontFile', frontFile);
  formData.append('backFile', backFile);
  formData.append('customer_name', customerName);
  formData.append('customer_email', customerEmail);
  formData.append('customer_phone', customerPhone);
  formData.append('customer_location', customerLocation);

  try {
    setLoading(true);
    console.log('📤 Sending order to server...');

    // ✅ Get token from localStorage
    const token = localStorage.getItem('userToken');
    if (!token) {
      alert('You must be logged in to place an order.');
      setLoading(false);
      return;
    }

    // ✅ Send token in Authorization header
    const res = await axios.post(`${BASE_URL}/api/orders`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('✅ Server response:', res.data);
    setSuccessMsg(res.data.message || 'Order placed successfully');

    if (res.data.orderId) {
      setTimeout(() => {
        navigate('/thank-you');
      }, 2000);
    } else {
      alert('⚠️ Order placed but no orderId returned.');
    }
  } catch (err) {
    console.error('❌ Order submission error:', err);
    alert(err.response?.data?.message || 'Failed to submit order');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="container py-5">
      <div className="bg-white shadow rounded p-4">
        <h3 className="mb-4 border-bottom pb-2">Confirm Your Order</h3>

        {successMsg && (
          <div className="alert alert-success d-flex align-items-center gap-2">
            <i className="fa fa-check-circle"></i> {successMsg}
          </div>
        )}

        {/* 🧍 Customer Details */}
        <div className="mb-4">
          <h5 className="border-bottom pb-2 mb-3">Customer Details</h5>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Location / Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location"
                value={customerLocation}
                onChange={(e) => setCustomerLocation(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 📦 Order Details */}
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group mb-3">
              <li className="list-group-item"><strong>Product:</strong> {product.title}</li>
              <li className="list-group-item"><strong>Quantity:</strong> {quantity}</li>
              <li className="list-group-item"><strong>Circulation:</strong> {circulation}</li>
              <li className="list-group-item"><strong>Series:</strong> {series}</li>
              <li className="list-group-item text-danger fw-bold">Total: AED {totalPrice.toFixed(2)}</li>
            </ul>
          </div>

          <div className="col-md-6">
            <div className="border p-3 mb-3 rounded bg-light text-center">
              <h6>Front File</h6>
              <p>{frontFile?.name || 'Not uploaded'}</p>
            </div>
            <div className="border p-3 rounded bg-light text-center">
              <h6>Back File</h6>
              <p>{backFile?.name || 'Not uploaded'}</p>
            </div>
          </div>
        </div>

        <div className="text-end mt-4">
          <button
            className="btn btn-success px-4"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fa fa-spinner fa-spin me-2"></i> Placing Order...
              </>
            ) : (
              <>
                <i className="fa fa-check-circle me-2"></i> Place Final Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
