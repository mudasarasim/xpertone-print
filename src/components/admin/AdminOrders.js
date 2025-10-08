// src/pages/admin/AdminOrders.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminOrders.css'; // custom CSS

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001/api/admin/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Error fetching orders:', err));
  }, []);

  return (
    <div className="container mt-4">
      {/* Back to Dashboard Button */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate('/admin/dashboard')}
      >
        ← Back to Dashboard
      </button>

      <h2 className="mb-4">📦 All Orders</h2>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="table-responsive shadow-sm rounded bg-white p-3">
          <table className="table table-hover table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Product Title</th>
                <th>Quantity</th>
                <th>Circulation</th>
                <th>Series</th>
                <th>Total Price (AED)</th>
                <th>Front File</th>
                <th>Back File</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="order-row">
                  <td>{order.id}</td>
                  <td>{order.product_title}</td>
                  <td>{order.quantity}</td>
                  <td>{order.circulation}</td>
                  <td>{order.series}</td>
                  <td>{order.total_price}</td>
                  <td>
                    {order.front_file ? (
                      <a 
                        href={`http://localhost:5001/uploads/${order.front_file}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </a>
                    ) : 'N/A'}
                  </td>
                  <td>
                    {order.back_file ? (
                      <a 
                        href={`http://localhost:5001/uploads/${order.back_file}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </a>
                    ) : 'N/A'}
                  </td>
                  <td>{new Date(order.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
