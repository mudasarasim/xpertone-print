import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BASE_URL from '../config';

const OrderPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = location.state || { items: [] };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      alert('Please fill all details.');
      return;
    }

    if (items.length === 0) {
      alert('No products selected!');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/safetyorder`, {
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone,
        delivery_location: formData.location,
        products: items,
      });

      alert('✅ Order placed successfully!');
      navigate('/thank-you');
    } catch (err) {
      console.error('Order error:', err);
      alert('❌ Failed to place order.');
    }
  };

  // Calculate total price per product
  const calculateProductTotal = (item) => {
    if (!item.sizeQuantities) return item.price || 0;
    return Object.values(item.sizeQuantities).reduce((sum, qty) => sum + qty * (item.price || 0), 0);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Place Your Order</h2>

      <div className="card shadow-sm p-4 mb-5">
        <h5 className="mb-3">Customer Details</h5>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Delivery Location"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
      </div>

      <h5 className="mb-3">Order Summary</h5>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-4">
                  <img
                    src={`${BASE_URL}/uploads/${item.image}`}
                    className="img-fluid rounded-start"
                    alt={item.title}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h6 className="card-title mb-1">{item.title}</h6>

                    {/* Display all size quantities with price */}
                    <p className="mb-1">
                      <strong>Quantity:</strong>{' '}
                      {item.sizeQuantities
                        ? Object.entries(item.sizeQuantities)
                            .map(([size, qty]) => `${size}(${qty} x AED ${item.price} = AED ${qty * item.price})`)
                            .join(', ')
                        : `${item.size}(${item.quantity})`}
                    </p>

                    {/* Total price per product */}
                    <p className="mb-0">
                      <strong>Total:</strong> AED {calculateProductTotal(item)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn btn-success mt-4 w-100 btn-hover"
        onClick={handlePlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderPage;
